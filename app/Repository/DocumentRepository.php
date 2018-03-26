<?php
namespace App\Repository;

use App\Model\Document;
use App\Repository\Interfaces\DocumentRepositoryInterface;
use Illuminate\Support\Facades\Auth;
use App\Repository\Eloquent\Repository;
use HyperDown\Parser;

class DocumentRepository extends Repository implements DocumentRepositoryInterface
{
    public function model()
    {
        return Document::class;
    }

    public function setBookId(int $id)
    {
        $this->input['book_id'] = $id;
        return $this;
    }

    public function paginate($perPage = 20, $columns = ['id','name','book_id','parent_id','sort','user_id','created_at','updated_at'])
    {
        $this->model = $this->model->orderBy('sort', 'asc')->orderBy('id', 'asc');
        return parent::paginate($perPage, $columns);
    }

    public function create(array $input)
    {
        if (!array_key_exists('user_id', $input)) {
            $input['user_id'] = Auth::user()->id;
        }
        if (isset($input['markdown'])) {
            $parser = new Parser;
            $input['content'] = $parser->makeHtml($text);
        }
        $input = array_merge($this->input, $input);
        return parent::create($input);
    }
}
