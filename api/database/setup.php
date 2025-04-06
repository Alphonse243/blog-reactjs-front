<?php
require_once __DIR__ . '/../bootstrap/app.php';

try {
    $config = require __DIR__ . '/../config/database.php';
    $pdo = new PDO(
        "mysql:host={$config['host']};charset={$config['charset']}",
        $config['username'],
        $config['password']
    );

    // Créer la base de données si elle n'existe pas
    $pdo->exec("CREATE DATABASE IF NOT EXISTS {$config['database']}");
    $pdo->exec("USE {$config['database']}");

    // Lire et exécuter le schéma SQL
    $sql = file_get_contents(__DIR__ . '/schema.sql');
    $pdo->exec($sql);

    echo "Les tables ont été créées avec succès!\n";
} catch (PDOException $e) {
    die("Erreur de configuration de la base de données: " . $e->getMessage() . "\n");
}
