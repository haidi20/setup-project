<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $appends = ['key'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'address'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function searchAbleColumn()
    {
        return ['id', 'name', 'email', 'address'];
    }

    public function scopeSearch($query)
    {
        foreach($this->searchAbleColumn() as $item){
            $query->orWhere($item, 'like', '%'.request('search').'%');
        }
    }

    public function scopeFilter($query)
    {
        foreach($this->searchAbleColumn() as $item){
            $query->where($item, 'like', '%'.request($item).'%');
        }
    }

    public function scopeSorted($query, $by = 'created_at', $sort = 'desc')
    {
        return $query->orderBy($by, $sort);
    }

    public function getKeyAttribute()
    {
        return $this->id;
    }
}
