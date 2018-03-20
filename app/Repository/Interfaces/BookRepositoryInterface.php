<?php
namespace App\Repository\Interfaces;

interface BookRepositoryInterface
{
    /**
     * 分页
     * @method paginate
     * @param  array    $input   [description]
     * @param  integer  $perPage [description]
     * @return [type]            [description]
     * author
     */
    public function myPaginate(array $input, int $perPage = 20);

    /**
     * 创建
     * @method create
     * @param  array  $input [description]
     * @return [type]        [description]
     * author
     */
    public function create(array $input);

    /**
     * 更新
     * @method update
     * @param  int    $id    [description]
     * @param  array  $input [description]
     * @return [type]        [description]
     * author
     */
    public function update(int $id, array $input);
}
