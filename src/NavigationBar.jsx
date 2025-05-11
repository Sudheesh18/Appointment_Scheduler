import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;

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