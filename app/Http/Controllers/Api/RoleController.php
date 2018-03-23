<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repository\Interfaces\RoleRepositoryInterface;
use Illuminate\Validation\Rule;

class RoleController extends Controller
{
    /**
     * 角色仓库.
     *
     * @var [type]
     */
    protected $roleRepository;

    /**
     * 构造函数.
     *
     * @method __construct
     *
     * @param ApiRepository $bookRepository [description]
     *                                      author
     */
    public function __construct(RoleRepositoryInterface $roleRepository)
    {
        $this->roleRepository = $roleRepository;
    }

    /**
     * [index description].
     *
     * @method index
     *
     * @param Request $request [description]
     *
     * @return [type] [description]
     *                author
     */
    public function index(Request $request)
    {
        return $this->response($this->roleRepository->all()->toArray());
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
        return $this->response($this->roleRepository->find($id)->toArray());
    }

    /**
     * [store description].
     *
     * @method store
     *
     * @param Request $request [description]
     *
     * @return [type] [description]
     *                author
     */
    public function store(Request $request)
    {
        $this->validate($request, [
          'name' => ['required', 'min:2', 'max:255', Rule::unique('roles')],
          'display_name' => ['required', 'max:255'],
          'description' => ['max:255'],
        ]);
        $input = $request->only(['name', 'display_name', 'description']);

        return $this->response($this->roleRepository->create($input)->toArray());
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
          'name' => ['min:2', 'max:255', Rule::unique('roles')->ignore($id)],
          'display_name' => ['min:2', 'max:255'],
          'description' => ['max:255'],
        ]);
        $input = $request->only(['display_name', 'description', 'name']);
        if ($this->roleRepository->update($input, $id)) {
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

        if ($this->roleRepository->relation($input, $id)) {
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
