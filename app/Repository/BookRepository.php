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
     * 设置用户组.
     *
     * @method setUserId
     *
     * @author luffyzhao@vip.126.com
     */
    public function setRoles()
    {
        $this->model = $this->model->where(function ($query) {
            Auth::user()->roles->each(function ($item, $index) use ($query) {
                $query->whereRaw("FIND_IN_SET('{$item['id']}', `books`.`roles`)");
            });
        });

        return $this;
    }

    /**
     * 分页.
     *
     * @method paginate
     *
     * @param int   $perPage [description]
     * @param array $columns [description]
     *
     * @return [type] [description]
     *
     * @author luffyzhao@vip.126.com
     */
    public function paginate($perPage = 20, $columns = ['books.*'])
    {
        $this->booksSelect($columns);
        $this->joinUser();
        $lists = parent::paginate($perPage, $columns);

        return $lists;
    }

    /**
     * 更新.
     *
     * @method update
     *
     * @param array  $data      [description]
     * @param [type] $id        [description]
     * @param string $attribute [description]
     *
     * @return [type] [description]
     *
     * @author luffyzhao@vip.126.com
     */
    public function update(array $data, $id, $attribute = 'id')
    {
        if (isset($input['roles']) && is_array($input['roles'])) {
            $input['roles'] = implode(',', $input['roles']);
        }

        return parent::update($data, $id, $attribute);
    }

    /**
     * 创建.
     *
     * @method create
     *
     * @param array $input [description]
     *
     * @return [type] [description]
     *                author
     */
    public function create(array $input)
    {
        if (!isset($input['user_id'])) {
            $input['user_id'] = Auth::user()->id;
        }

        if (!isset($input['roles'])) {
            $input['roles'] = Auth::user()->roles->pluck('id')->implode(',');
        } elseif (is_array($input['roles'])) {
            $input['roles'] = implode(',', $input['roles']);
        }

        return parent::create($input);
    }

    /**
     * 关联用户表.
     *
     * @method joinUser
     *
     * @return [type] [description]
     *
     * @author luffyzhao@vip.126.com
     */
    protected function joinUser()
    {
        $this->model = $this->model->leftJoin('users', 'users.id', '=', 'books.user_id')->addSelect(['users.username as username']);
    }

    /**
     * 要查询的字段.
     *
     * @method booksSelect
     *
     * @param array $columns [description]
     *
     * @return [type] [description]
     *
     * @author luffyzhao@vip.126.com
     */
    protected function booksSelect($columns = ['books.*'])
    {
        $this->model = $this->model->select($columns);
    }
}
