<?php

namespace App\Repository;

use App\Model\Book;
use Illuminate\Support\Facades\Auth;
use App\Repository\Eloquent\Repository;
use App\Repository\Interfaces\BookRepositoryInterface;
use Illuminate\Support\Str;

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
    public function setGroup()
    {
        $this->model = $this->model->where(function ($query) {
            Auth::user()->groups->each(function ($item, $index) use ($query) {
                $query->whereRaw("FIND_IN_SET('{$item['id']}', `books`.`groups`)");
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
        if (isset($data['groups']) && is_array($data['groups'])) {
            $data['groups'] = implode(',', $data['groups']);
        }

        return parent::update($data, $id, $attribute);
    }

    /**
     * 更新用户组.
     *
     * @method group
     *
     * @param array  $data [description]
     * @param [type] $id   [description]
     *
     * @return [type] [description]
     *
     * @author luffyzhao@vip.126.com
     */
    public function group(array $data, $id)
    {
        $groups = implode(',', $data['relation']);

        return parent::update(['groups' => $groups], $id, 'id');
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

        if (!isset($input['groups'])) {
            $input['groups'] = Auth::user()->groups->pluck('id')->implode(',');
        } elseif (is_array($input['groups'])) {
            $input['groups'] = implode(',', $input['groups']);
        }

        if (!isset($input['identify'])) {
            $input['identify'] = Str::random(18);
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
