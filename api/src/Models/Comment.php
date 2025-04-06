<?php

namespace App\Models;

class Comment extends Model
{
    protected $fillable = ['content', 'post_id', 'user_id', 'is_approved'];

    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
