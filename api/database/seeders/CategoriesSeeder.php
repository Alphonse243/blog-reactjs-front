<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategoriesSeeder extends Seeder
{
    public function run()
    {
        $categories = [
            ['name' => 'Technologie', 'description' => 'Articles sur la technologie'],
            ['name' => 'Voyage', 'description' => 'Découvrez de nouvelles destinations'],
            ['name' => 'Cuisine', 'description' => 'Recettes et astuces culinaires'],
            ['name' => 'Sport', 'description' => 'Actualités sportives'],
        ];

        foreach ($categories as $category) {
            Category::create([
                'name' => $category['name'],
                'slug' => Str::slug($category['name']),
                'description' => $category['description'],
            ]);
        }
    }
}
