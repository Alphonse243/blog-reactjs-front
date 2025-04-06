<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PostsSeeder extends Seeder
{
    public function run()
    {
        $users = User::all();
        $categories = Category::all();
        $tags = Tag::all();

        $posts = [
            [
                'title' => 'Introduction à React.js',
                'content' => 'React est une bibliothèque JavaScript pour créer des interfaces utilisateurs...',
            ],
            [
                'title' => 'Les bases de Laravel',
                'content' => 'Laravel est un framework PHP moderne qui simplifie le développement...',
            ],
            [
                'title' => 'API REST avec PHP',
                'content' => 'Créez des API RESTful performantes avec PHP et Laravel...',
            ]
        ];

        foreach ($posts as $post) {
            $newPost = Post::create([
                'title' => $post['title'],
                'slug' => Str::slug($post['title']),
                'content' => $post['content'],
                'image_url' => 'https://picsum.photos/400/300?random=' . rand(1, 100),
                'user_id' => $users->random()->id,
                'category_id' => $categories->random()->id,
                'status' => 'published',
                'views' => rand(0, 1000),
            ]);

            // Attacher 2-4 tags aléatoires à chaque article
            $newPost->tags()->attach($tags->random(rand(2, 4)));
        }
    }
}
