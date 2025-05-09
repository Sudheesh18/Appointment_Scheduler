import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Doctor.css';
import NavigationBar from './NavigationBar';
import SearchAndFilter from './SearchAndFilter';
import HealthTip from './HealthTip';
import DoctorOfDay from './/DoctorOfDay';
import ThemeToggle from './ThemeToggle';

function Neurologist() {
  const navigate = useNavigate();
  const [filteredDoctors, setFilteredDoctors] = useState([]);
 
  const neurologists = [
    {
      id: 1,
      name: "Dr. Xavier",
      available: "Mon, Wed, Fri (10am - 2pm)",
    },
    {
      id: 2,
      name: "Dr. Yaazhan",
      available: "Tue, Thu (1pm - 5pm)",
    },
    {
      id: 3,
      name: "Dr. Vignesh",
      available: "Sat (9am - 1pm)",
    }
  ];

  useEffect(() => {
    setFilteredDoctors(neurologists);
  }, []);

  const handleFilterChange = (filtered) => {
    setFilteredDoctors(filtered);
  };

  const handleSchedule = (doctorId) => {
    alert("Thank you for your request, your appointment will be scheduled soon");
    navigate('/');
  };

  return (
    <>
      <NavigationBar />
      <div className="doctor-page">
        <SearchAndFilter
          doctors={neurologists}
          onFilterChange={handleFilterChange}
        />
       
        <div className="doctor-content">
          <div className="doctor-main">
            <div className="doctor-image-section">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Neurologist Department"
              />
            </div>

            <div className="doctor-list-section">
              <h2>Available Neurologists</h2>
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
            <HealthTip specialty="Neurologist" />
            <DoctorOfDay specialty="Neurologist" />
          </div>
        </div>
      </div>
      <ThemeToggle />
    </>
  );
}

export default Neurologist;