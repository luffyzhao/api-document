<?php
namespace App\Repository;

use App\Model\Book;
use Illuminate\Support\Facades\Auth;
use App\Repository\Eloquent\Repository;
use App\Repository\Interfaces\BookRepositoryInterface;

class BookRepository extends Repository implements BookRepositoryInterface
{
    public function model()
    {
        return Book::class;
    }
    /**
     * 获取我的项目并分页
     * @method myPaginate
     * @return [type]     [description]
     * author
     */
    public function myPaginate($perPage = 20, $columns = ['*'])
    {
        $this->model = $this->model->where('user_id', Auth::user()->id);
        return parent::paginate($perPage, $columns);
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
        if (!array_key_exists('user_id', $input)) {
            $input['user_id'] = Auth::user()->id;
        }
        return parent::create($input);
    }
}
