<?php
namespace App\Repository;

use App\Model\Book;
use App\Repository\Interfaces\BookRepositoryInterface;

class BookRepository implements BookRepositoryInterface
{
    private $model;

    public function __construct(Book $model)
    {
        $this->model = $model;
    }

    /**
     * 分页
     * @method paginate
     * @param  array    $input   [description]
     * @param  integer  $perPage [description]
     * @return [type]            [description]
     * author
     */
    public function myPaginate(array $input, int $perPage = 20)
    {
        return request()->user()->books()->paginate($perPage);
    }

    /**
     * 创建
     * @method create
     * @param  array  $input [description]
     * @return [type]        [description]
     * author
     */
    public function create(array $input)
    {
        return request()->user()->books()->save(new Book($input));
    }

    /**
     * [update description]
     * @method update
     * @param  int    $id    [description]
     * @param  array  $input [description]
     * @return [type]        [description]
     * author
     */
    public function update(int $id, array $input)
    {
        Book::where('id', $id)
        ->where('user_id', request()->user()->id)
        ->update($input);

        return $this->model->find($id);
    }
}
