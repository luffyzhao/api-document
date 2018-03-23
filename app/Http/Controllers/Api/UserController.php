<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repository\Interfaces\UserRepositoryInterface;

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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
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
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
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
