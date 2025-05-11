import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Doctor.css';
import NavigationBar from './NavigationBar';
import SearchAndFilter from './SearchAndFilter';
import HealthTip from './HealthTip';
import DoctorOfDay from './DoctorOfDay';
import ThemeToggle from './ThemeToggle';

function Dentist() {
  const navigate = useNavigate();
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  
  const dentists = [
    {
      id: 1,
      name: "Dr. Sanjay",
      available: "Mon, Wed, Fri (10am - 3pm)",
    },
    {
      id: 2,
      name: "Dr. Thanraj",
      available: "Tue, Thu (1pm - 5pm)",
    },
    {
      id: 3,
      name: "Dr. Uday",
      available: "Sat (9am - 1pm)",
    }
  ];

  useEffect(() => {
    setFilteredDoctors(dentists);
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
          doctors={dentists} 
          onFilterChange={handleFilterChange}
        />
        
        <div className="doctor-content">
          <div className="doctor-main">
            <div className="doctor-image-section">
              <img
                src="https://media.gettyimages.com/id/1175163250/vector/dentist-and-child.jpg?s=612x612&w=gi&k=20&c=W7cuB-93hKPTwHyvXmQUEwqHBnq4P6OG0FWSSxJaYOo="
                alt="Dentist Department"
              />
            </div>

            <div className="doctor-list-section">
              <h2>Available Dentists</h2>
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
            <HealthTip specialty="Dentist" />
            <DoctorOfDay specialty="Dentist" />
          </div>
        </div>
      </div>
      <ThemeToggle />
    </>
  );
}

export default Dentist;
