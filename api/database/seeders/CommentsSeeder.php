<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;

class CommentsSeeder extends Seeder
{
    public function run()
    {
        $posts = Post::all();
        $users = User::all();
        
        foreach ($posts as $post) {
            for ($i = 0; $i < rand(1, 5); $i++) {
                Comment::create([
                    'content' => 'Commentaire #' . ($i + 1) . ' sur l\'article. Très intéressant !',
                    'post_id' => $post->id,
                    'user_id' => $users->random()->id,
                    'is_approved' => rand(0, 1),
                ]);
            }
        }
    }
}
