<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    /**
     * 可以被批量赋值的属性.
     *
     * @var array
     */
    protected $fillable = ['name', 'book_id', 'parent_id', 'sort', 'markdown', 'content', 'user_id'];
}
