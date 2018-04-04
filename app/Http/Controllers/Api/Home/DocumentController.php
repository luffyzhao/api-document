<?php

namespace App\Http\Controllers\Api\Home;

use App\Http\Controllers\Controller;
use App\Repository\Interfaces\DocumentRepositoryInterface;

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
        return $this->response($this->documentRepository->setBookId($id)->all());
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($bookid, $id)
    {
        return $this->response($this->documentRepository->setBookId($bookid)->find($id, ['id', 'markdown']));
    }
}
