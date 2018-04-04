<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Validation\Rule;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     */
    // public function __construct()
    // {
    //     $this->middleware('auth:api', ['except' => ['login']]);
    // }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return $this->response([], '登录验证失败！', 401);
        }

        return $this->response($this->respondWithToken($token));
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return $this->response(auth()->user());
    }

    /**
     * 修改用户密码
     *
     * @method password
     *
     * @param [type] $request [description]
     * @param [type] $id      [description]
     *
     * @return [type] [description]
     *                author
     */
    public function password(Request $request)
    {
        $this->validate($request, [
          'old_password' => ['required', 'min:6', 'max:20'],
          'password' => ['required_with:password_confirmation', 'min:6', 'max:20', 'confirmed'],
        ]);

        if (!\Hash::check($request->input('old_password'), auth()->user()->password)) {
            return $this->response([], '更新失败，原密码错误！', 423);
        }

        $input = $request->only(['password']);

        $userRepository = app('App\Repository\Interfaces\UserRepositoryInterface');

        if ($userRepository->update($input, auth()->user()->id)) {
            return $this->response([], '更新成功');
        } else {
            return $this->response([], '更新失败', 500);
        }
    }

    /**
     * 更新登录用户.
     *
     * @method update
     *
     * @param Request $request [description]
     *
     * @return [type] [description]
     *
     * @author luffyzhao@vip.126.com
     */
    public function update(Request $request)
    {
        $this->validate($request, [
          'username' => ['required', 'min:2', 'max:50'],
          'email' => ['required', 'max:50', Rule::unique('users')->ignore(auth()->user()->id), 'email'],
          'phone' => ['required', 'integer'],
        ]);
        $input = $request->only(['username', 'email', 'phone']);
        $userRepository = app('App\Repository\Interfaces\UserRepositoryInterface');

        if ($userRepository->update($input, auth()->user()->id)) {
            return $this->response([], '更新成功');
        } else {
            return $this->response([], '更新失败', 500);
        }
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return $this->response([], 'Successfully logged out');
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->response($this->respondWithToken(auth()->refresh()));
    }

    /**
     * Get the token array structure.
     *
     * @param string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return [
          'access_token' => $token,
          'token_type' => 'bearer',
          'expires_in' => auth()->factory()->getTTL() * 60,
      ];
    }
}
