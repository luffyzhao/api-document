<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repository\Interfaces\GroupRepositoryInterface;
use Illuminate\Validation\Rule;

class GroupController extends Controller
{
    /**
     * api仓库.
     *
     * @var [type]
     */
    protected $groupRepository;

    /**
     * 构造函数.
     *
     * @method __construct
     *
     * @param ApiRepository $bookRepository [description]
     *                                      author
     */
    public function __construct(GroupRepositoryInterface $groupRepository)
    {
        $this->groupRepository = $groupRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->response($this->groupRepository->paginate());
    }

    /**
     * 获取全部的用户组.
     *
     * @method all
     *
     * @param Request $request [description]
     *
     * @return [type] [description]
     *
     * @author luffyzhao@vip.126.com
     */
    public function all(Request $request)
    {
        return $this->response($this->groupRepository->all(['id', 'name']));
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
        'name' => ['required', 'min:2', 'max:255', Rule::unique('groups')],
        'description' => ['max:255'],
      ]);
        $input = $request->only(['name', 'description']);

        return $this->response($this->groupRepository->create($input)->toArray());
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
        return $this->response($this->groupRepository->find($id));
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
        'name' => ['required', 'min:2', 'max:255', Rule::unique('groups')->ignore($id)],
        'description' => ['max:255'],
      ]);

        $input = $request->only(['description', 'name']);
        if ($this->groupRepository->update($input, $id)) {
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
        if ($this->groupRepository->destroy($id)) {
            return $this->response([], '删除成功');
        }

        return $this->response([], '删除失败', 500);
    }
}
