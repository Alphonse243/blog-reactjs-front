import React, { useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { 
  FaUsers, FaNewspaper, FaComments, FaChartLine, FaEdit, FaTrash, 
  FaEye, FaCog, FaBell, FaCalendar, FaRocket, FaChartPie, FaList,
  FaUsersCog, FaTools, FaTachometerAlt
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
  // État pour gérer l'onglet actif
  const [currentTab, setCurrentTab] = useState('overview');

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
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart'
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
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
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1a202c',
        bodyColor: '#4a5568',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        padding: 12,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        bodyFont: {
          size: 13
        },
        titleFont: {
          size: 14,
          weight: 'bold'
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

  // Nouvelles sections pour le dashboard
  const dashboardSections = [
    { id: 'overview', icon: <FaTachometerAlt />, title: 'Vue d\'ensemble' },
    { id: 'articles', icon: <FaNewspaper />, title: 'Articles' },
    { id: 'users', icon: <FaUsersCog />, title: 'Utilisateurs' },
    { id: 'analytics', icon: <FaChartPie />, title: 'Analytiques' },
    { id: 'settings', icon: <FaTools />, title: 'Paramètres' }
  ];

  // Fonction pour changer d'onglet
  const renderTabContent = () => {
    switch(currentTab) {
      case 'overview':
        return (
          <div>
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
          </div>
        );
      case 'articles':
        return (
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5 mb-4">Gestion des Articles</h3>
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
        );
      case 'users':
        return (
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5 mb-4">Gestion des Utilisateurs</h3>
              <p>Contenu pour la gestion des utilisateurs...</p>
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5 mb-4">Analytiques</h3>
              <p>Contenu pour les analytiques...</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5 mb-4">Paramètres</h3>
              <p>Contenu pour les paramètres...</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container py-4">
      <div className="container-fluid px-4">
        {/* Header amélioré */}
        <div className="dashboard-header mb-4">
          <div className="row align-items-center">
            <div className="col">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <p className="mb-0 text-gray-600">Bienvenue dans votre espace d'administration</p>
            </div>
            <div className="col-auto d-flex gap-2">
              <button className="btn btn-light position-relative">
                <FaBell />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  3
                </span>
              </button>
              <button className="btn btn-primary d-flex align-items-center">
                <FaRocket className="me-2" />
                Actions rapides
              </button>
            </div>
          </div>
        </div>

        {/* Navigation améliorée */}
        <div className="dashboard-nav mb-4">
          {dashboardSections.map(section => (
            <button
              key={section.id}
              className={`dashboard-nav-item ${currentTab === section.id ? 'active' : ''}`}
              onClick={() => setCurrentTab(section.id)}
            >
              {section.icon}
              <span className="ms-2">{section.title}</span>
            </button>
          ))}
        </div>

        {/* Contenu dynamique */}
        <div className="dashboard-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
