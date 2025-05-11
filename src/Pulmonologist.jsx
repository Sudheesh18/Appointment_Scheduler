import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Doctor.css';
import NavigationBar from './NavigationBar';
import SearchAndFilter from './SearchAndFilter';
import HealthTip from './HealthTip';
import DoctorOfDay from './DoctorOfDay';
import ThemeToggle from './ThemeToggle';

function Pulmonologist() {
  const navigate = useNavigate();
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  
  const pulmonologists = [
    {
      id: 1,
      name: "Dr. Ayesha",
      available: "Mon, Wed, Fri (11am - 3pm)",
    },
    {
      id: 2,
      name: "Dr. Ramesh",
      available: "Tue, Thu (10am - 2pm)",
    },
    {
      id: 3,
      name: "Dr. Sandeep",
      available: "Sat (9am - 12pm)",
    }
  ];

  useEffect(() => {
    setFilteredDoctors(pulmonologists);
  }, []);

  const handleFilterChange = (filtered) => {
    setFilteredDoctors(filtered);
  };

  const handleSchedule = (doctorId) => {
    alert("Thank you for your request, your appointment will be scheduled soon through an email");
    navigate('/');
  };

  return (
    <>
      <NavigationBar />
      <div className="doctor-page">
        <SearchAndFilter 
          doctors={pulmonologists} 
          onFilterChange={handleFilterChange}
        />
        
        <div className="doctor-content">
          <div className="doctor-main">
            <div className="doctor-image-section">
              <img
                src="https://www.marvelhospitals.in/wp-content/uploads/2022/04/pulmonology.jpg"
                alt="Pulmonologist Department"
              />
            </div>

            <div className="doctor-list-section">
              <h2>Available Pulmonologists</h2>
              <ul className="doctor-list">
                {filteredDoctors.map((doc) => (
                  <li key={doc.id} className="doctor-card">
                    <h3>{doc.name}</h3>
                    <p><strong>Available:</strong> {doc.available}</p>
                    <button onClick={() => handleSchedule(doc.id)}>
                      Schedule Appointment
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="doctor-sidebar">
            <HealthTip specialty="Pulmonologist" />
            <DoctorOfDay specialty="Pulmonologist" />
          </div>
        </div>
      </div>
      <ThemeToggle />
    </>
  );
}

export default Pulmonologist;