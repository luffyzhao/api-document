<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repository\Interfaces\UserRepositoryInterface;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    /**
     * 角色仓库.
     *
     * @var [type]
     */
    protected $userRepository;

    /**
     * 构造函数.
     *
     * @method __construct
     *
     * @param ApiRepository $bookRepository [description]
     *                                      author
     */
    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->response($this->userRepository->paginate()->toArray());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
          'username' => ['required', 'min:2', 'max:50'],
          'email' => ['required', 'max:50', Rule::unique('users'), 'email'],
          'phone' => ['regex:/^1[34578][0-9]{9}$/'],
          'password' => ['required_with:password_confirmation', 'min:6', 'max:20', 'confirmed'],
        ]);
        $input = $request->only(['username', 'email', 'phone', 'password']);

        return $this->response($this->userRepository->create($input)->toArray());
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->response($this->userRepository->find($id)->toArray());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int                      $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
          'username' => ['required', 'min:2', 'max:50'],
          'email' => ['required', 'max:50', Rule::unique('users')->ignore($id), 'email'],
          'phone' => ['required', 'integer'],
        ]);
        $input = $request->only(['username', 'email', 'phone']);

        if ($this->userRepository->update($input, $id)) {
            return $this->response([], '更新成功');
        } else {
            return $this->response([], '更新失败', 500);
        }
    }

    /**
     * 关联.
     *
     * @method relation
     *
     * @param Request $request [description]
     * @param [type]  $id      [description]
     *
     * @return [type] [description]
     *                author
     */
    public function relation(Request $request, $id)
    {
        $this->validate($request, [
          'relation' => ['required', 'array'],
          'relation.*' => ['integer'],
        ]);

        $input = $request->only(['relation']);

        if ($this->userRepository->relation($input, $id)) {
            return $this->response([], '关联成功');
        } else {
            return $this->response([], '关联失败', 500);
        }
    }

    /**
     * 获取关联角色.
     *
     * @method allot
     *
     * @param Request $request [description]
     *
     * @return [type] [description]
     *
     * @author luffyzhao@vip.126.com
     */
    public function allot(Request $request, $id)
    {
        $user = $this->userRepository->find($id);

        return $this->response($user->roles);
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
    public function password(Request $request, $id)
    {
        $this->validate($request, [
          'old_password' => ['required', 'min:6', 'max:20'],
          'password' => ['required_with:password_confirmation', 'min:6', 'max:20', 'confirmed'],
        ]);

        $user = $this->userRepository->find($id);

        if (!\Hash::check($request->input('old_password'), $user->password)) {
            return $this->response([], '更新失败，原密码错误！', 423);
        }

        $input = $request->only(['password']);

        if ($this->userRepository->update($input, $id)) {
            return $this->response([], '更新成功');
        } else {
            return $this->response([], '更新失败', 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
    }
}
