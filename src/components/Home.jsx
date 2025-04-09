import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaRegClock, FaRegHeart, FaRegComment } from 'react-icons/fa';
import '../styles/Home.css';

/**
 * Composant Home - Page d'accueil
 * Affiche une liste d'articles sous forme de grille
 */
const Home = () => {
  /**
   * État local pour stocker les articles
   * Dans un cas réel, ces données viendraient d'une API
   */
  const [posts] = useState([
    {
      id: 1,
      title: "Les dernières avancées en Intelligence Artificielle",
      excerpt: "Découvrez comment l'IA révolutionne notre quotidien avec des applications concrètes...",
      image: "https://picsum.photos/id/1/600/400",
      author: "John Doe",
      date: "2023-12-20",
      category: "Technologie",
      likes: 156,
      comments: 23
    },
    {
      id: 2,
      title: "Le futur des énergies renouvelables",
      excerpt: "Les nouvelles technologies qui transforment le secteur énergétique...",
      image: "https://picsum.photos/id/2/600/400",
      author: "Marie Martin",
      date: "2023-12-19",
      category: "Environnement",
      likes: 234,
      comments: 45
    },
    {
      id: 3,
      title: "Révolution dans la médecine personnalisée",
      excerpt: "Comment le big data transforme les traitements médicaux...",
      image: "https://picsum.photos/id/3/600/400",
      author: "Dr. Sarah Johnson",
      date: "2023-12-18",
      category: "Santé",
      likes: 189,
      comments: 32
    },
    {
      id: 4,
      title: "Les tendances digitales de 2024",
      excerpt: "Les innovations qui vont marquer l'année à venir...",
      image: "https://picsum.photos/id/4/600/400",
      author: "Alex Tech",
      date: "2023-12-17",
      category: "Digital",
      likes: 145,
      comments: 28
    },
    {
      id: 5,
      title: "Sport: Les champions émergents",
      excerpt: "Les nouveaux talents qui bouleversent le monde du sport...",
      image: "https://picsum.photos/id/5/600/400",
      author: "Marc Sportif",
      date: "2023-12-16",
      category: "Sport",
      likes: 267,
      comments: 54
    },
    {
      id: 6,
      title: "L'art à l'ère du numérique",
      excerpt: "Comment la technologie transforme la création artistique...",
      image: "https://picsum.photos/id/6/600/400",
      author: "Claire Artiste",
      date: "2023-12-15",
      category: "Culture",
      likes: 198,
      comments: 41
    },
    {
      id: 7,
      title: "Économie: Les marchés en mutation",
      excerpt: "Analyse des nouvelles tendances économiques mondiales...",
      image: "https://picsum.photos/id/7/600/400",
      author: "Paul Finance",
      date: "2023-12-14",
      category: "Économie",
      likes: 167,
      comments: 38
    },
    {
      id: 8,
      title: "Voyage: Destinations insolites",
      excerpt: "Découvrez des lieux méconnus à travers le monde...",
      image: "https://picsum.photos/id/8/600/400",
      author: "Sophie Globe",
      date: "2023-12-13",
      category: "Voyage",
      likes: 289,
      comments: 62
    },
    {
      id: 9,
      title: "Gastronomie: Saveurs d'ailleurs",
      excerpt: "Les nouvelles tendances culinaires internationales...",
      image: "https://picsum.photos/id/9/600/400",
      author: "Chef Pierre",
      date: "2023-12-12",
      category: "Cuisine",
      likes: 234,
      comments: 47
    },
    {
      id: 10,
      title: "Mode: Les créateurs innovants",
      excerpt: "Les nouveaux talents qui révolutionnent la mode...",
      image: "https://picsum.photos/id/10/600/400",
      author: "Emma Style",
      date: "2023-12-11",
      category: "Mode",
      likes: 312,
      comments: 58
    },
    {
      id: 11,
      title: "Science: Découvertes spatiales",
      excerpt: "Les dernières avancées dans l'exploration spatiale...",
      image: "https://picsum.photos/id/11/600/400",
      author: "Dr. Thomas Space",
      date: "2023-12-10",
      category: "Science",
      likes: 276,
      comments: 49
    },
    {
      id: 12,
      title: "Éducation: Nouvelles méthodes",
      excerpt: "L'innovation pédagogique en action...",
      image: "https://picsum.photos/id/12/600/400",
      author: "Prof. Linda",
      date: "2023-12-09",
      category: "Éducation",
      likes: 187,
      comments: 45
    },
    {
      id: 13,
      title: "Jeux vidéo: L'esport en croissance",
      excerpt: "L'évolution du gaming professionnel...",
      image: "https://picsum.photos/id/13/600/400",
      author: "GameMaster",
      date: "2023-12-08",
      category: "Gaming",
      likes: 423,
      comments: 89
    },
    {
      id: 14,
      title: "Architecture: Villes du futur",
      excerpt: "Les projets urbains qui transforment nos villes...",
      image: "https://picsum.photos/id/14/600/400",
      author: "Léa Design",
      date: "2023-12-07",
      category: "Architecture",
      likes: 167,
      comments: 34
    },
    {
      id: 15,
      title: "Startups: Success stories",
      excerpt: "Les entrepreneurs qui changent le monde...",
      image: "https://picsum.photos/id/15/600/400",
      author: "Start Runner",
      date: "2023-12-06",
      category: "Business",
      likes: 198,
      comments: 43
    },
    {
      id: 16,
      title: "Musique: Nouveaux talents",
      excerpt: "Les artistes émergents à suivre...",
      image: "https://picsum.photos/id/16/600/400",
      author: "DJ Max",
      date: "2023-12-05",
      category: "Musique",
      likes: 345,
      comments: 67
    },
    {
      id: 17,
      title: "Cinéma: Dans les coulisses",
      excerpt: "Les secrets des prochains blockbusters...",
      image: "https://picsum.photos/id/17/600/400",
      author: "Ciné Insider",
      date: "2023-12-04",
      category: "Cinéma",
      likes: 267,
      comments: 52
    },
    {
      id: 18,
      title: "Agriculture: Innovation verte",
      excerpt: "Les technologies au service de l'agriculture durable...",
      image: "https://picsum.photos/id/18/600/400",
      author: "Eco Farmer",
      date: "2023-12-03",
      category: "Agriculture",
      likes: 156,
      comments: 37
    },
    {
      id: 19,
      title: "Bien-être: Nouvelles pratiques",
      excerpt: "Les tendances bien-être à adopter...",
      image: "https://picsum.photos/id/19/600/400",
      author: "Zen Master",
      date: "2023-12-02",
      category: "Bien-être",
      likes: 289,
      comments: 56
    },
    {
      id: 20,
      title: "Transport: Mobilité future",
      excerpt: "Les innovations qui transforment nos déplacements...",
      image: "https://picsum.photos/id/20/600/400",
      author: "Auto Tech",
      date: "2023-12-01",
      category: "Transport",
      likes: 234,
      comments: 48
    }
  ]);

  return (
    <div>
      {/* Hero Section avec Bootstrap */}
      <div className="bg-primary bg-gradient text-white py-5 mb-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Explorez l'actualité</h1>
          <p className="lead">Les dernières nouvelles et tendances.</p>
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
          {posts.map((post) => (
            <div key={post.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <Link to={`/post/${post.id}`} className="text-decoration-none">
                  <div className="position-relative">
                    <img src={post.image} className="card-img-top" alt={post.title} style={{height: '200px', objectFit: 'cover'}} />
                    <span className="position-absolute top-0 end-0 badge bg-primary m-2">
                      {post.category}
                    </span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-dark">{post.title}</h5>
                    <p className="card-text text-muted small">{post.excerpt}</p>
                    <div className="d-flex justify-content-between align-items-center text-muted small">
                      <div className="d-flex align-items-center">
                        <FaUser className="me-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <FaRegClock className="me-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-white border-top">
                    <div className="d-flex justify-content-between text-muted small">
                      <span><FaRegHeart className="me-1" />{post.likes}</span>
                      <span><FaRegComment className="me-1" />{post.comments}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
