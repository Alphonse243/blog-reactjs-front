<?php

require_once __DIR__ . '/../../backend/vendor/autoload.php';
require_once __DIR__ . '/../../backend/config/database.php';

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Content-Type: application/json');

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', trim($uri, '/'));
$resource = $uri[1] ?? null;
$id = $uri[2] ?? null;
$action = $uri[3] ?? null;

try {
    switch ($resource) {
        case 'users':
            $controller = new \App\Controllers\UserController();
            break;
        case 'posts':
            $controller = new \App\Controllers\PostController();
            break;
        case 'categories':
            $controller = new \App\Controllers\CategoryController();
            break;
        case 'comments':
            $controller = new \App\Controllers\CommentController();
            break;
        default:
            http_response_code(404);
            echo json_encode(['error' => 'Resource not found']);
            exit;
    }

    switch ($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            if ($id) {
                $controller->show($id);
            } else {
                $controller->index();
            }
            break;
        case 'POST':
            $controller->store();
            break;
        case 'PUT':
            if ($id) {
                $controller->update($id);
            }
            break;
        case 'DELETE':
            if ($id) {
                $controller->delete($id);
            }
            break;
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}