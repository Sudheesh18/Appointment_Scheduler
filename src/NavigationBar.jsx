import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Dashboard.css'; // Assumes your nav styles are defined here

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const specialties = [
    { name: "Dentist", path: "/Dentist" },
    { name: "Cardiologist", path: "/Cardiologist" },
    { name: "Neurologist", path: "/Neurologist" },
    { name: "Psychiatrist", path: "/Psychiatrist" },
    { name: "Pulmonologist", path: "/Pulmonologist" },
    { name: "Pediatrician", path: "/Pediatrician" }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => navigate('/')}>
          Appointment Scheduler
        </div>
        <div className="navbar-links">
          <button
            onClick={() => navigate('/user-appointments')}
            className={path === '/user-appointments' ? 'navbar-link active' : 'navbar-link'}
          >
            Your Appointments
          </button>
          {specialties.map((specialty) => (
            <button 
              key={specialty.name} 
              onClick={() => navigate(specialty.path)}
              className={path === specialty.path ? 'navbar-link active' : 'navbar-link'}
            >
              {specialty.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
