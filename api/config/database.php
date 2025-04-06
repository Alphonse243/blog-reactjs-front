<?php

// Configuration de la base de données par défaut
return [
    // Connexion par défaut
    'default' => 'mysql',
    // Liste des connexions disponibles
    'connections' => [
        'mysql' => [
            'driver' => 'mysql',
            'host' => 'localhost',
            'database' => 'react_blog',
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
        ],
    ],
];
