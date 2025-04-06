# React Blog Project

## Structure du Projet
```
react-front/
├── api/                      # Backend API (PHP)
│   ├── config/              # Configuration files
│   │   └── database.php     # Database configuration
│   ├── database/
│   │   └── migrations/      # Database schema
│   │       └── schema.sql
│   ├── public/              # Public directory
│   │   └── index.php       # Entry point for API
│   └── src/
│       ├── Controllers/     # API Controllers
│       │   ├── BaseController.php
│       │   ├── UserController.php
│       │   ├── PostController.php
│       │   ├── CategoryController.php
│       │   └── CommentController.php
│       └── Models/          # Database Models
│           ├── User.php
│           ├── Post.php
│           ├── Category.php
│           ├── Tag.php
│           └── Comment.php
├── src/                     # Frontend React
│   ├── api/                 # API Integration
│   │   ├── axios.js        # Axios configuration
│   │   └── config.js       # API endpoints
│   ├── components/         # React Components
│   ├── pages/             # React Pages
│   └── App.js             # Main React component
└── webpack.config.js       # Webpack configuration
```

## Technologies Utilisées

### Backend (API)
- PHP Vanilla
- Illuminate/Database (Eloquent ORM)
- MySQL Database

### Frontend
- React
- Axios pour les requêtes API
- React Router pour la navigation

## Installation

1. Configuration Backend (API)
```bash
cd api
composer install
```

2. Configuration Base de données
```bash
# Importer le schéma de la base de données
mysql -u root -p react_blog < api/database/migrations/schema.sql
```

3. Configuration Frontend
```bash
npm install
npm start
```

## API Endpoints

### Users
- GET /api/users - Liste des utilisateurs
- GET /api/users/{id} - Détails d'un utilisateur
- POST /api/users - Créer un utilisateur
- PUT /api/users/{id} - Modifier un utilisateur
- DELETE /api/users/{id} - Supprimer un utilisateur

### Posts
- GET /api/posts - Liste des articles
- GET /api/posts/{id} - Détails d'un article
- POST /api/posts - Créer un article
- PUT /api/posts/{id} - Modifier un article
- DELETE /api/posts/{id} - Supprimer un article

### Categories
- GET /api/categories - Liste des catégories
- POST /api/categories - Créer une catégorie
- PUT /api/categories/{id} - Modifier une catégorie
- DELETE /api/categories/{id} - Supprimer une catégorie

### Comments
- GET /api/comments - Liste des commentaires
- POST /api/comments - Créer un commentaire
- PUT /api/comments/{id}/approve - Approuver un commentaire
- DELETE /api/comments/{id} - Supprimer un commentaire
