<?php

require __DIR__ . '/../vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as Capsule;

// Chargement de la configuration de la base de données
$capsule = new Capsule;
$config = require __DIR__ . '/../config/database.php';
$capsule->addConnection($config['connections']['mysql']);
$capsule->setAsGlobal();
$capsule->bootEloquent();

// Définition du fuseau horaire par défaut
date_default_timezone_set('UTC');
