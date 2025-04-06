<?php

namespace App\Models;

class User extends Model
{
    protected $fillable = ['name', 'email', 'password', 'role', 'avatar_url'];
    protected $hidden = ['password'];

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
