<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserGroup extends Model
{
    protected $table = 'user_group';
    protected $appends = ['key'];

    public function scopeSearch($query)
    {
        $query->where('name', 'like', '%'.request('search').'%');
    }

    public function scopeSorted($query, $by = 'created_at', $sort = 'desc')
    {
        return $query->orderBy($by, $sort);
    }

    public function scopeFilter($query)
    {
        $query->where('name', 'like', '%'.request('name').'%');
    }

    public function getKeyAttribute()
    {
        return $this->id;
    }
}
