<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class DocumentHistory extends Model
{
    protected $fillable = ['document_id', 'name', 'markdown', 'user_id'];
}
