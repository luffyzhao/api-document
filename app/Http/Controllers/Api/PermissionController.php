<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repository\Interfaces\PermissionRepositoryInterface;
use Illuminate\Validation\Rule;

class PermissionController extends Controller
{
    /**
     * 角色仓库.
     *
     * @var [type]
     */
    protected $permissionRepository;

    /**
     * 构造函数.
     *
     * @method __construct
     *
     * @param ApiRepository $bookRepository [description]
     *                                      author
     */
    public function __construct(PermissionRepositoryInterface $permissionRepository)
    {
        $this->permissionRepository = $permissionRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->response($this->permissionRepository->paginate()->toArray());
    }

    /**
     * 获取全部的权限.
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
        return $this->response($this->permissionRepository->all(['id', 'name', 'display_name']));
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
          'name' => ['required', 'min:2', 'max:255', Rule::unique('permissions')],
          'display_name' => ['required', 'max:255'],
          'description' => ['max:255'],
        ]);
        $input = $request->only(['name', 'display_name', 'description']);

        return $this->response($this->permissionRepository->create($input)->toArray());
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
        return $this->response($this->permissionRepository->find($id)->toArray());
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
          'name' => ['required', 'min:2', 'max:255', Rule::unique('permissions')->ignore($id)],
          'display_name' => ['required', 'max:255'],
          'description' => ['max:255'],
        ]);

        $input = $request->only(['display_name', 'description', 'name']);
        if ($this->permissionRepository->update($input, $id)) {
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
        if ($this->permissionRepository->destroy($id)) {
            return $this->response([], '删除成功');
        }

        return $this->response([], '删除失败', 500);
    }
}
