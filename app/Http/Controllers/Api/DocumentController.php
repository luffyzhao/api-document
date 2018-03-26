<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repository\Interfaces\DocumentRepositoryInterface;
use Illuminate\Validation\Rule;

class DocumentController extends Controller
{

  /**
   * 角色仓库.
   *
   * @var [type]
   */
    protected $documentRepository;

    /**
     * 构造函数.
     *
     * @method __construct
     *
     * @param ApiRepository $bookRepository [description]
     *                                      author
     */
    public function __construct(DocumentRepositoryInterface $documentRepository)
    {
        $this->documentRepository = $documentRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        return $this->response($this->documentRepository->setBookId($id)->paginate()->toArray());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        $this->validate($request, [
          'name' => ['required', 'min:2', 'max:50'],
          'parent_id' => ['integer'],
          'sort' => ['required', 'integer'],
        ]);
        $input = $request->only(['name', 'parent_id', 'sort', 'markdown']);

        return $this->response($this->documentRepository->setBookId($id)->create($input)->toArray());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
