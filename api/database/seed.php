<?php
require_once __DIR__ . '/../bootstrap/app.php';

use Illuminate\Database\Capsule\Manager as Capsule;
use Carbon\Carbon;
use Faker\Factory as Faker;
use Illuminate\Support\Str;

// Configuration de la base de données
$capsule = new Capsule;
$config = require __DIR__ . '/../config/database.php';
$capsule->addConnection($config['connections']['mysql']);
$capsule->setAsGlobal();
$capsule->bootEloquent();

$faker = Faker::create('fr_FR');

try {
    // Seed Users
    echo "Seeding users...\n";
    for ($i = 0; $i < 10; $i++) {
        Capsule::table('users')->insert([
            'name' => $faker->name,
            'email' => $faker->unique()->safeEmail,
            'password' => password_hash('password', PASSWORD_DEFAULT),
            'role' => $faker->randomElement(['user', 'author', 'admin']),
            'avatar_url' => $faker->imageUrl(100, 100, 'people'),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }

    // Seed Categories
    echo "Seeding categories...\n";
    $categories = ['Technology', 'Travel', 'Food', 'Sports', 'Science', 'Arts'];
    foreach ($categories as $category) {
        Capsule::table('categories')->insert([
            'name' => $category,
            'slug' => Str::slug($category),
            'description' => $faker->sentence(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }

    // Seed Tags
    echo "Seeding tags...\n";
    $tags = ['PHP', 'JavaScript', 'React', 'Vue', 'Angular', 'Laravel', 'NodeJS', 'Python'];
    foreach ($tags as $tag) {
        Capsule::table('tags')->insert([
            'name' => $tag,
            'slug' => Str::slug($tag),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }

    // Seed Posts
    echo "Seeding posts...\n";
    $users = Capsule::table('users')->pluck('id');
    $categories = Capsule::table('categories')->pluck('id');
    
    for ($i = 0; $i < 20; $i++) {
        $postId = Capsule::table('posts')->insertGetId([
            'title' => $faker->sentence,
            'slug' => $faker->slug,
            'content' => $faker->paragraphs(3, true),
            'image_url' => $faker->imageUrl(800, 600),
            'user_id' => $users->random(),
            'category_id' => $categories->random(),
            'status' => $faker->randomElement(['draft', 'published']),
            'views' => $faker->numberBetween(0, 1000),
            'created_at' => Carbon::now()->subDays($faker->numberBetween(1, 30)),
            'updated_at' => Carbon::now()
        ]);

        // Attach tags to posts
        $tagIds = Capsule::table('tags')->inRandomOrder()->limit(rand(2, 4))->pluck('id');
        foreach ($tagIds as $tagId) {
            Capsule::table('post_tag')->insert([
                'post_id' => $postId,
                'tag_id' => $tagId
            ]);
        }

        // Seed Comments for each post
        for ($j = 0; $j < rand(3, 8); $j++) {
            Capsule::table('comments')->insert([
                'content' => $faker->paragraph,
                'post_id' => $postId,
                'user_id' => $users->random(),
                'is_approved' => $faker->boolean(80),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
        }
    }

    echo "Database seeded successfully!\n";
} catch (Exception $e) {
    die("Error seeding database: " . $e->getMessage() . "\n");
}
