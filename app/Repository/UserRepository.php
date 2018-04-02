<?php

namespace App\Repository;

use App\Model\User;
use App\Repository\Interfaces\UserRepositoryInterface;
use App\Repository\Eloquent\Repository;

class UserRepository extends Repository implements UserRepositoryInterface
{
    public function model()
    {
        return User::class;
    }

    /**
     * 关联.
     *
     * @method relation
     *
     * @param array $input [description]
     * @param int   $id    [description]
     *
     * @return [type] [description]
     *                author
     */
    public function relation(array $input, int $id)
    {
        $user = parent::find($id);

        return $user->roles()->sync($input['relation']);
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
        if (array_key_exists('password', $data)) {
            $data['password'] = bcrypt($data['password']);
        }

        return parent::update($data, $id, $attribute);
    }

    /**
     * 创建.
     *
     * @method create
     *
     * @param array $data [description]
     *
     * @return [type] [description]
     *
     * @author luffyzhao@vip.126.com
     */
    public function create(array $data)
    {
        if (array_key_exists('password', $data)) {
            $data['password'] = bcrypt($data['password']);
        }

        return parent::create($data);
    }
}
