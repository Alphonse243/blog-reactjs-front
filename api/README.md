# API Blog avec Eloquent, Carbon et Faker

## Configuration initiale

1. Installer les dépendances
```bash
composer install
```

2. Créer la base de données
```sql
CREATE DATABASE blog_react CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

3. Configurer la base de données dans `config/database.php`

## Structure des Models

### User
- Relations: 
  - hasMany posts
  - hasMany comments

### Post
- Relations:
  - belongsTo user
  - belongsTo category
  - belongsToMany tags
  - hasMany comments

### Category
- Relations:
  - hasMany posts

### Tag
- Relations:
  - belongsToMany posts

### Comment
- Relations:
  - belongsTo post
  - belongsTo user

## Seeding de la base de données

1. Ordre d'exécution des seeds:
```php
- UsersSeeder
- CategoriesSeeder
- TagsSeeder
- PostsSeeder
- CommentsSeeder
```

2. Lancer le seeding:
```bash
php database/seed.php
```

## Données de test générées

- 5 utilisateurs avec rôles différents
- 4 catégories prédéfinies
- 5 tags pour le référencement
- 10 articles avec contenu Faker
- 1-5 commentaires par article

## Utilisation de Faker

Exemples de génération de données:
```php
$faker->name           // Noms aléatoires
$faker->sentence       // Titres
$faker->paragraphs     // Contenu d'articles
$faker->imageUrl       // Images aléatoires
$faker->boolean        // Valeurs true/false
$faker->numberBetween  // Nombres aléatoires
```

## Utilisation de Carbon

Exemples de manipulation des dates:
```php
Carbon::now()
Carbon::now()->subDays(5)
Carbon::parse($date)->format('Y-m-d')
```
