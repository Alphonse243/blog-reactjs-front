import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { FaUsers, FaNewspaper, FaComments, FaChartLine } from 'react-icons/fa';
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

const Dashboard = () => {
  // Données pour les cartes de statistiques
  const stats = [
    { title: "Utilisateurs", count: "1,234", icon: <FaUsers />, color: "#4C51BF" },
    { title: "Articles", count: "56", icon: <FaNewspaper />, color: "#2B6CB0" },
    { title: "Commentaires", count: "893", icon: <FaComments />, color: "#2C7A7B" },
    { title: "Vues", count: "12,345", icon: <FaChartLine />, color: "#4C51BF" },
  ];

  // Données pour le graphique des vues
  const viewsData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Vues mensuelles',
      data: [1200, 1900, 1500, 2800, 2300, 2600],
      borderColor: '#4C51BF',
      tension: 0.4,
      fill: false
    }]
  };

  // Données pour le graphique des catégories
  const categoriesData = {
    labels: ['Tech', 'Sport', 'Culture', 'Science', 'Économie'],
    datasets: [{
      data: [30, 25, 20, 15, 10],
      backgroundColor: [
        '#4C51BF',
        '#2B6CB0',
        '#2C7A7B',
        '#4A5568',
        '#6B46C1'
      ]
    }]
  };

  return (
    <div className="dashboard-container py-4">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <h1 className="h3">Tableau de bord</h1>
            <p className="text-muted">Vue d'ensemble des statistiques</p>
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

        {/* Graphiques */}
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-4">Évolution des vues</h5>
                <Line data={viewsData} options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } }
                }} height={300} />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-4">Répartition par catégorie</h5>
                <Doughnut data={categoriesData} options={{
                  responsive: true,
                  maintainAspectRatio: false
                }} height={300} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
