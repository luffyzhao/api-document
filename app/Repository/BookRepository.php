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

    public function setUserId(int $id = null)
    {
        $this->model = $this->model->where(function ($query) {
            Auth::user()->roles->each(function ($item, $index) use ($query) {
                $query->whereRaw("FIND_IN_SET('{$item['id']}',roles)");
            });
        });

        return $this;
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
}
