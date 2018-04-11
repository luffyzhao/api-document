<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    /**
     * 可以被批量赋值的属性.
     *
     * @var array
     */
    protected $fillable = ['name', 'identify', 'description', 'status', 'user_id', 'groups'];

    protected $hidden = ['user_id'];

    /**
     * 获取评论对应的博客文章.
     */
    public function users()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * 项目文档.
     *
     * @method documents
     *
     * @return [type] [description]
     *
     * @author luffyzhao@vip.126.com
     */
    public function documents()
    {
        return $this->hasMany('App\Model\Document')->orderBy('sort', 'asc')->orderBy('id', 'asc');
    }

    /**
     * 访问器.
     *
     * @method getRulesAttribute
     *
     * @param [type] $value [description]
     *
     * @return [type] [description]
     *
     * @author luffyzhao@vip.126.com
     */
    public function getRolesAttribute($value)
    {
        return explode(',', $value);
    }
}
