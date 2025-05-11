import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import NavigationBar from './NavigationBar';
import ThemeToggle from './ThemeToggle';

function Dashboard() {
  const navigate = useNavigate();

  const specialties = [
    {
      name: "DENTIST",
      description: "Specialists in oral health, teeth, and gum care",
      icon: "🦷",
      path: "/Dentist"
    },
    {
      name: "CARDIOLOGIST",
      description: "Heart specialists focusing on cardiovascular health",
      icon: "❤️",
      path: "/Cardiologist"
    },
    {
      name: "NEUROLOGIST",
      description: "Experts in nervous system disorders and treatment",
      icon: "🧠",
      path: "/Neurologist"
    },
    {
      name: "PSYCHIATRIST",
      description: "Mental health professionals providing therapy and medication",
      icon: "🧘",
      path: "/Psychiatrist"
    },
    {
      name: "PULMONOLOGIST",
      description: "Respiratory system specialists for lung-related conditions",
      icon: "🏥",
      path: "/Pulmonologist"
    },
    {
      name: "PEDIATRICIAN",
      description: "Child healthcare specialists from birth through adolescence",
      icon: "👶",
      path: "/Pediatrician"
    }
  ];

  return (
    <>
      <NavigationBar />
      <div className="overall-container">
        <div className="dashboard-header">
          <h1>Medical Specialists</h1>
          <p>Schedule appointments with top specialists in various medical fields</p>
        </div>
        
        <div className="dashboard-container">
          {specialties.map((specialty) => (
            <div 
              key={specialty.name}
              className="specialty-card"
              onClick={() => navigate(specialty.path)}
            >
              <div className="specialty-icon">{specialty.icon}</div>
              <div className="specialty-name">{specialty.name}</div>
              <div className="specialty-description">{specialty.description}</div>
            </div>
          ))}
        </div>
      </div>
      <ThemeToggle />
    </>
  );
}

export default Dashboard;