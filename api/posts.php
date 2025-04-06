<?php
require_once __DIR__ . '/bootstrap/app.php';

// Activer l'affichage des erreurs en développement
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Configuration des headers CORS
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

use App\Models\Post;
use Illuminate\Database\Capsule\Manager as Capsule;

try {
    // Vérification de la connexion à la base de données
    if (!Capsule::connection()->getPdo()) {
        throw new Exception('Impossible de se connecter à la base de données');
    }

    // Test de la requête avant d'ajouter les relations
    $posts = Post::query()
        ->where('status', 'published')
        ->orderBy('created_at', 'desc')
        ->get();

    $formattedPosts = $posts->map(function ($post) {
        return [
            'id' => $post->id,
            'title' => $post->title,
            'content' => $post->content,
            'slug' => $post->slug,
            'image_url' => $post->image_url ?? 'https://picsum.photos/400/300',
            'views' => $post->views ?? 0,
            'status' => $post->status,
            'created_at' => $post->created_at,
            'user' => [
                'name' => 'Utilisateur Test',
                'avatar_url' => 'https://ui-avatars.com/api/?name=Test',
            ],
            'category' => [
                'name' => 'Catégorie Test',
                'slug' => 'categorie-test',
            ],
            'tags' => [],
        ];
    });

    echo json_encode($formattedPosts);
} catch (Exception $e) {
    error_log($e->getMessage() . "\n" . $e->getTraceAsString());
    http_response_code(500);
    echo json_encode([
        'error' => 'Une erreur est survenue lors de la récupération des articles',
        'debug' => [
            'message' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine()
        ]
    ]);
}
