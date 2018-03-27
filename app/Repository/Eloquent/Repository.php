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
     * Illuminate\Database\Eloquent\Model.
     *
     * @var Model
     */
    protected $model;

    protected $input = [];

    public function __construct(App $app)
    {
        $this->app = $app;
        $this->makeModel();
    }

    /**
     * 设置input.
     *
     * @method __set
     *
     * @param [type] $key   [description]
     * @param [type] $value [description]
     *                      author
     */
    public function __set($key, $value)
    {
        $this->input[$key] = $value;

        return $input;
    }

    /**
     * model类.
     *
     * @method   model
     * @DateTime 2017-10-23T16:53:20+0800
     *
     * @return [type] [description]
     */
    abstract public function model();

    /**
     * @return \Illuminate\Database\Eloquent\Builder
     *
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
     * 分页.
     *
     * @method paginate
     *
     * @param int   $perPage [description]
     * @param array $columns [description]
     *
     * @return [type] [description]
     *                author
     */
    public function paginate($perPage = 20, $columns = ['*'])
    {
        $this->whereInput();

        return $this->model->paginate($perPage, $columns);
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
        return $this->model->create($input);
    }

    /**
     * @param array $columns
     *
     * @return mixed
     */
    public function all($columns = ['*'])
    {
        $this->whereInput();

        return $this->model->get($columns);
    }

    /**
     * @param array $data
     * @param $id
     * @param string $attribute
     *
     * @return mixed
     */
    public function update(array $data, $id, $attribute = 'id')
    {
        $this->whereInput();

        return $this->model->where($attribute, '=', $id)->update($data);
    }

    /**
     * @param $id
     *
     * @return mixed
     */
    public function delete($id)
    {
        $this->whereInput();

        return $this->model->destroy($id);
    }

    /**
     * @param $id
     * @param array $columns
     *
     * @return mixed
     */
    public function find($id, $columns = ['*'])
    {
        $this->whereInput();

        return $this->model->find($id, $columns);
    }

    /**
     * @param $attribute
     * @param $value
     * @param array $columns
     *
     * @return mixed
     */
    public function findBy($attribute, $value, $columns = ['*'])
    {
        $this->whereInput();

        return $this->model->where($attribute, '=', $value)->first($columns);
    }

    /**
     * where.
     *
     * @method whereInput
     *
     * @return [type] [description]
     *                author
     */
    protected function whereInput()
    {
        if (!empty($this->input)) {
            foreach ($this->input as $key => $value) {
                $this->model = $this->model->where($key, $value);
            }
        }
        $this->input = [];
    }
}
