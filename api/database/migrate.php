<?php
require_once __DIR__ . '/../bootstrap/app.php';

use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Schema\Blueprint;

// Configuration de la base de données
$capsule = new Capsule;
$config = require __DIR__ . '/../config/database.php';
$capsule->addConnection($config['connections']['mysql']);
$capsule->setAsGlobal();
$capsule->bootEloquent();

try {
    // Créer la base de données si elle n'existe pas
    $pdo = new PDO(
        "mysql:host={$config['connections']['mysql']['host']}",
        $config['connections']['mysql']['username'],
        $config['connections']['mysql']['password']
    );
    $database = $config['connections']['mysql']['database'];
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `$database`");
    $pdo->exec("USE `$database`");

    // Obtenir la liste des tables existantes
    $tables = [];
    $result = $pdo->query("SHOW TABLES");
    while ($row = $result->fetch(PDO::FETCH_NUM)) {
        $tables[] = $row[0];
    }

    // Exécuter les migrations
    $migrations = glob(__DIR__ . '/migrations/*.php');
    sort($migrations);

    foreach ($migrations as $file) {
        require_once $file;
        $className = 'Migration_' . basename($file, '.php');
        if (class_exists($className)) {
            // Extraire le nom de la table du nom de fichier
            preg_match('/create_(\w+)_table/', basename($file), $matches);
            $tableName = $matches[1];
            
            if (!in_array($tableName, $tables)) {
                $migration = new $className();
                $migration->up();
                echo "Migration exécutée: " . basename($file) . PHP_EOL;
            } else {
                echo "Table '$tableName' existe déjà, migration ignorée: " . basename($file) . PHP_EOL;
            }
        } else {
            echo "Classe de migration non trouvée dans: " . basename($file) . PHP_EOL;
        }
    }

    echo "Migrations terminées avec succès!\n";
} catch (Exception $e) {
    die("Erreur: " . $e->getMessage() . "\n");
}
