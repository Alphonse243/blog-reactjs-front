<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            UsersSeeder::class,
            CategoriesSeeder::class,
            TagsSeeder::class,
            PostsSeeder::class,
            CommentsSeeder::class,
        ]);
    }
}
