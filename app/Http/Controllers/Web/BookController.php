<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repository\Interfaces\BookRepositoryInterface;

class BookController extends Controller
{
    /**
     * 角色仓库.
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

    public function index(Request $request, $identify)
    {
        $book = $this->bookRepository->findBy('identify', $identify);
        if (empty($book)) {
            abort(404);
        }

        return view('documents/index', ['book' => $book]);
    }
}
