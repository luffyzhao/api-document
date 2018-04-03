<?php

namespace App\Repository;

use App\Model\Document;
use App\Repository\Interfaces\DocumentRepositoryInterface;
use Illuminate\Support\Facades\Auth;
use App\Repository\Eloquent\Repository;
use HyperDown\Parser;
use Michelf\MarkdownExtra;
use DB;

class DocumentRepository extends Repository implements DocumentRepositoryInterface
{
    public function model()
    {
        return Document::class;
    }

    /**
     * 设置查询约束条件 book_id.
     *
     * @method setBookId
     *
     * @param int $id [description]
     *
     * @author luffyzhao@vip.126.com
     */
    public function setBookId(int $id)
    {
        $this->input['book_id'] = $id;

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
    public function paginate($perPage = 20, $columns = ['id', 'name', 'book_id', 'parent_id', 'sort', 'user_id', 'created_at', 'updated_at'])
    {
        $this->model = $this->model->orderBy('sort', 'asc')->orderBy('id', 'asc');

        return parent::paginate($perPage, $columns);
    }

    /**
     * @param array $columns
     *
     * @return mixed
     */
    public function all($columns = ['id', 'name', 'book_id', 'parent_id', 'sort', 'user_id', 'created_at', 'updated_at'])
    {
        $this->model = $this->model->orderBy('sort', 'asc')->orderBy('id', 'asc');

        return parent::all();
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
        $model = parent::find($id);
        $this->saveAtHistory($model);
        if (isset($data['markdown'])) {
            // $parser = new Parser();
            // $data['content'] = $parser->makeHtml($data['markdown']);
            $parser = new MarkdownExtra();
            $parser->code_class_prefix = 'lang-';
            $data['content'] = $parser->transform($data['markdown']);
        }

        return parent::update($data, $id, $attribute);
    }

    /**
     * 创建.
     *
     * @method delete
     *
     * @param [type] $id [description]
     *
     * @return [type] [description]
     *
     * @author luffyzhao@vip.126.com
     */
    public function create(array $input)
    {
        if (!isset($input['user_id'])) {
            $input['user_id'] = Auth::user()->id;
        }
        if (isset($input['markdown'])) {
            $parser = new Parser();
            $input['content'] = $parser->makeHtml($input['markdown']);
        }
        if (!isset($input['sort'])) {
            $input['sort'] = DB::table('documents')->where('book_id', $this->input['book_id'])->max('sort') + 1;
        }
        $input = array_merge($this->input, $input);

        return parent::create($input);
    }

    /**
     * 删除.
     *
     * @method delete
     *
     * @param [type] $id [description]
     *
     * @return [type] [description]
     *
     * @author luffyzhao@vip.126.com
     */
    public function delete($id)
    {
        $model = parent::find($id);
        $this->saveAtHistory($model);

        return $model->delete();
    }

    /**
     * [findBy description].
     *
     * @method findBy
     *
     * @param [type] $attribute [description]
     * @param [type] $value     [description]
     * @param array  $columns   [description]
     *
     * @return [type] [description]
     *
     * @author luffyzhao@vip.126.com
     */
    public function findBy($attribute, $value, $columns = ['*'])
    {
        $this->model = $this->model->orderBy('sort', 'asc')->orderBy('id', 'asc');
        parent::findBy($attribute, $value, $columns);
    }

    /**
     * 保存到历史记录.
     *
     * @method saveAtHistory
     *
     * @param Document $document [description]
     *
     * @return [type] [description]
     *
     * @author luffyzhao@vip.126.com
     */
    protected function saveAtHistory(Document $document)
    {
        $history = app('App\Repository\Interfaces\DocumentHistoryRepositoryInterface');
        $history->create([
          'document_id' => $document->id,
          'name' => $document->name,
          'markdown' => $document->markdown,
          'user_id' => $document->user_id,
        ]);
    }
}
