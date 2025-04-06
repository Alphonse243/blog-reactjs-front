import React, { useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { 
  FaUsers, FaNewspaper, FaComments, FaChartLine, 
  FaEdit, FaTrash, FaEye, FaCog, FaBell, FaCalendar 
} from 'react-icons/fa';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Enregistrement des composants Chart.js nécessaires
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

/**
 * Composant Dashboard - Tableau de bord administrateur
 * Affiche les statistiques et permet la gestion du blog
 */
const Dashboard = () => {
  // État pour les onglets de gestion
  const [activeTab, setActiveTab] = useState('overview');

  /**
   * Données pour les cartes de statistiques principales
   */
  const stats = [
    { title: "Utilisateurs", count: "1,234", icon: <FaUsers />, color: "#4C51BF" },
    { title: "Articles", count: "56", icon: <FaNewspaper />, color: "#2B6CB0" },
    { title: "Commentaires", count: "893", icon: <FaComments />, color: "#2C7A7B" },
    { title: "Vues", count: "12,345", icon: <FaChartLine />, color: "#4C51BF" },
  ];

  /**
   * Données pour le tableau des derniers articles
   */
  const recentPosts = [
    {
      id: 1,
      title: "Comment optimiser son référencement en 2024",
      status: "publié",
      views: 1234,
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Les tendances SEO",
      status: "brouillon",
      views: 567,
      date: "2024-01-10"
    }
  ];

  /**
   * Données pour le tableau des commentaires récents
   */
  const recentComments = [
    {
      id: 1,
      author: "Marie D.",
      content: "Excellent article, très instructif !",
      post: "Les tendances SEO",
      date: "2024-01-16"
    },
    {
      id: 2,
      author: "Jean P.",
      content: "Merci pour ces conseils.",
      post: "Comment optimiser son référencement en 2024",
      date: "2024-01-15"
    }
  ];

  // Configuration améliorée des graphiques
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12
          }
        }
      }
    }
  };

  // Données pour le graphique des vues avec style amélioré
  const viewsData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Vues mensuelles',
      data: [1200, 1900, 1500, 2800, 2300, 2600],
      borderColor: '#4C51BF',
      backgroundColor: 'rgba(76, 81, 191, 0.1)',
      tension: 0.4,
      fill: true,
      pointStyle: 'circle',
      pointRadius: 4,
      pointHoverRadius: 6
    }]
  };

  // Données pour le graphique des catégories avec style amélioré
  const categoriesData = {
    labels: ['Tech', 'Sport', 'Culture', 'Science', 'Économie'],
    datasets: [{
      data: [30, 25, 20, 15, 10],
      backgroundColor: [
        'rgba(76, 81, 191, 0.8)',
        'rgba(43, 108, 176, 0.8)',
        'rgba(44, 122, 123, 0.8)',
        'rgba(74, 85, 104, 0.8)',
        'rgba(107, 70, 193, 0.8)'
      ],
      borderWidth: 0,
      hoverOffset: 4
    }]
  };

  return (
    <div className="dashboard-container py-4">
      <div className="container-fluid px-4">
        {/* En-tête du dashboard */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h3 mb-0">Tableau de bord</h1>
            <p className="text-muted">Bienvenue dans votre espace d'administration</p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary">
              <FaBell className="me-2" />
              Notifications <span className="badge bg-danger">3</span>
            </button>
            <button className="btn btn-primary">
              <FaEdit className="me-2" />
              Nouvel article
            </button>
          </div>
        </div>

        {/* Menu de navigation rapide */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-0">
                <div className="nav nav-pills nav-fill">
                  {['Vue d\'ensemble', 'Articles', 'Commentaires', 'Utilisateurs', 'Réglages'].map((item, index) => (
                    <button 
                      key={index}
                      className={`nav-link rounded-0 py-3 ${index === 0 ? 'active' : ''}`}
                      onClick={() => setActiveTab(item.toLowerCase())}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cartes de statistiques */}
        <div className="row g-3 mb-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="stat-icon" style={{ color: stat.color }}>
                      {stat.icon}
                    </div>
                    <div className="ms-3">
                      <h6 className="card-title mb-0">{stat.title}</h6>
                      <h3 className="mb-0">{stat.count}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Graphiques avec nouvelle disposition */}
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="card-title mb-0">Vue d'ensemble</h5>
                  <select className="form-select form-select-sm w-auto">
                    <option>7 derniers jours</option>
                    <option>30 derniers jours</option>
                    <option>Cette année</option>
                  </select>
                </div>
                <div style={{ height: '250px' }}>
                  <Line data={viewsData} options={chartOptions} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-4">Distribution</h5>
                <div style={{ height: '250px' }}>
                  <Doughnut 
                    data={categoriesData} 
                    options={{
                      ...chartOptions,
                      cutout: '70%'
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Derniers articles */}
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-between align-items-center">
                  Derniers articles
                  <button className="btn btn-sm btn-link">Voir tout</button>
                </h5>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Titre</th>
                        <th>Statut</th>
                        <th>Vues</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentPosts.map(post => (
                        <tr key={post.id}>
                          <td>{post.title}</td>
                          <td>{post.status}</td>
                          <td>{post.views}</td>
                          <td>{post.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          {/* Derniers commentaires */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-between align-items-center">
                  Derniers commentaires
                  <button className="btn btn-sm btn-link">Voir tout</button>
                </h5>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Auteur</th>
                        <th>Commentaire</th>
                        <th>Article</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentComments.map(comment => (
                        <tr key={comment.id}>
                          <td>{comment.author}</td>
                          <td>{comment.content}</td>
                          <td>{comment.post}</td>
                          <td>{comment.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
