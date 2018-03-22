<?php
namespace App\Repository\Eloquent;

use Illuminate\Container\Container as App;
use Illuminate\Database\Eloquent\Model;
use Luffy\Repositories\Exceptions\RepositoryException;

abstract class Repository
{
    /**
     * @var App
     */
    private $app;
    /**
     * Illuminate\Database\Eloquent\Model
     * @var Model
     */
    protected $model;

    public function __construct(App $app)
    {
        $this->app = $app;
        $this->makeModel();
    }

    /**
     * model类
     * @method   model
     * @DateTime 2017-10-23T16:53:20+0800
     * @return   [type]                   [description]
     */
    abstract public function model();

    /**
     * @return \Illuminate\Database\Eloquent\Builder
     * @throws RepositoryException
     */
    public function makeModel()
    {
        $model = $this->app->make($this->model());

        if (!$model instanceof Model) {
            throw new RepositoryException("Class {$this->model()} must be an instance of Illuminate\\Database\\Eloquent\\Model");
        }

        return $this->model = $model->newQuery();
    }
    /**
     * 分页
     * @method paginate
     * @param  integer    $perPage   [description]
     * @param  array  $columns [description]
     * @return [type]            [description]
     * author
     */
    public function paginate($perPage = 20, $columns = ['*'])
    {
        return $this->model->paginate($perPage, $columns);
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
        return $this->model->create($input);
    }

    /**
     * @param array $columns
     * @return mixed
     */
    public function all($columns = ['*'])
    {
        return $this->model->get($columns);
    }

    /**
     * @param array $data
     * @param $id
     * @param string $attribute
     * @return mixed
     */
    public function update(array $data, $id, $attribute = "id")
    {
        return $this->model->where($attribute, '=', $id)->update($data);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function delete($id)
    {
        return $this->model->destroy($id);
    }

    /**
     * @param $id
     * @param array $columns
     * @return mixed
     */
    public function find($id, $columns = ['*'])
    {
        return $this->model->find($id, $columns);
    }

    /**
     * @param $attribute
     * @param $value
     * @param array $columns
     * @return mixed
     */
    public function findBy($attribute, $value, $columns = ['*'])
    {
        return $this->model->where($attribute, '=', $value)->first($columns);
    }
}
