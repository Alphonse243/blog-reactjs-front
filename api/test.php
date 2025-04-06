<?php
header('Content-Type: application/json');

// Database configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'test');
define('DB_USER', 'root');
define('DB_PASS', '');

$status = [
    'status' => 'ok',
    'checks' => []
];

// Check PHP version
$status['checks']['php_version'] = [
    'status' => version_compare(PHP_VERSION, '7.4.0', '>='),
    'version' => PHP_VERSION,
    'required' => '7.4.0'
];

// Check required extensions
$required_extensions = ['pdo', 'json', 'mysqli'];
foreach ($required_extensions as $ext) {
    $status['checks']['extensions'][$ext] = [
        'status' => extension_loaded($ext),
        'loaded' => extension_loaded($ext)
    ];
}

// Check database connection
try {
    // Try to connect without database first
    $pdo = new PDO("mysql:host=" . DB_HOST, DB_USER, DB_PASS);
    
    // Check if database exists
    $stmt = $pdo->query("SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '" . DB_NAME . "'");
    
    if (!$stmt->fetch()) {
        // Create database if it doesn't exist
        $pdo->exec("CREATE DATABASE " . DB_NAME);
        $status['checks']['database'] = [
            'status' => true,
            'message' => 'Database created successfully'
        ];
    }
    
    // Connect to the database
    $db = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $status['checks']['database'] = [
        'status' => true,
        'message' => 'Connected successfully'
    ];
} catch(PDOException $e) {
    $status['checks']['database'] = [
        'status' => false,
        'message' => $e->getMessage()
    ];
}

// Set overall status
foreach ($status['checks'] as $check) {
    if (isset($check['status']) && $check['status'] === false) {
        $status['status'] = 'error';
        break;
    }
}

echo json_encode($status, JSON_PRETTY_PRINT);
