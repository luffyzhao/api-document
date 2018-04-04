<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repository\Interfaces\BookRepositoryInterface;
use Illuminate\Validation\Rule;

class BookController extends Controller
{
    /**
     * api仓库.
     *
     * @var [type]
     */
    protected $bookRepository;

    /**
     * 构造函数.
     *
     * @method __construct
     *
     * @param ApiRepository $bookRepository [description]
     *                                      author
     */
    public function __construct(BookRepositoryInterface $bookRepository)
    {
        $this->bookRepository = $bookRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->response($this->bookRepository->setGroup()->paginate());
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
        return $this->response($this->bookRepository->setGroup()->find($id)->toArray());
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
          'name' => ['required', 'max:255'],
          'identify' => ['regex:/^[a-z]+[0-9a-zA-Z-_]*$/', Rule::unique('books')],
          'description' => ['max:255'],
          'status' => ['required', Rule::in([0, 1])],
          '' => ['array'],
          'groups.*' => ['integer'],
        ]);
        $input = $request->only(['name', 'identify', 'description', 'status', 'groups']);

        return $this->response($this->bookRepository->create($input)->toArray());
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
          'name' => ['max:255'],
          'description' => ['max:255'],
          'status' => [Rule::in([0, 1])],
          'groups' => ['array'],
          'groups.*' => ['integer'],
        ]);
        $input = $request->only(['name', 'description', 'status', 'groups']);

        if ($this->bookRepository->update($input, $id)) {
            return $this->response([], '更新成功');
        } else {
            return $this->response([], '更新失败', 500);
        }
    }

    /**
     * 修改用户组.
     *
     * @method group
     *
     * @param Request $request [description]
     * @param [type]  $id      [description]
     *
     * @return [type] [description]
     *
     * @author luffyzhao@vip.126.com
     */
    public function group(Request $request, $id)
    {
        $this->validate($request, [
        'relation' => ['required', 'array'],
        'relation.*' => ['integer'],
      ]);

        $input = $request->only(['relation']);

        if ($this->bookRepository->group($input, $id)) {
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
