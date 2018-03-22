<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repository\Interfaces\RoleRepositoryInterface;
use Illuminate\Validation\Rule;

class RoleController extends Controller
{
    /**
     * 角色仓库
     * @var [type]
     */
    protected $roleRepository;
    /**
     * 构造函数
     * @method __construct
     * @param  ApiRepository $bookRepository [description]
     * author
     */
    public function __construct(RoleRepositoryInterface $roleRepository)
    {
        $this->roleRepository = $roleRepository;
    }

    /**
     * [index description]
     * @method index
     * @param  Request $request [description]
     * @return [type]           [description]
     * author
     */
    public function index(Request $request)
    {
        return $this->response($this->roleRepository->all()->toArray());
    }

    /**
     * [store description]
     * @method store
     * @param  Request $request [description]
     * @return [type]           [description]
     * author
     */
    public function store(Request $request)
    {
        $this->validate($request, [
          'name' => ['required', 'max:255', Rule::unique('roles')],
          'display_name' => ['required', 'max:255'],
          'description' => ['max:255'],
        ]);
        $input = $request->only(['name', 'display_name', 'description']);

        return $this->response($this->roleRepository->create($input)->toArray());
    }
}
