import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Doctor.css';
import NavigationBar from './NavigationBar';
import SearchAndFilter from './SearchAndFilter';
import HealthTip from './HealthTip';
import DoctorOfDay from './DoctorOfDay';
import ThemeToggle from './ThemeToggle';

function Pediatrician() {
  const navigate = useNavigate();
  const [filteredDoctors, setFilteredDoctors] = useState([]);
 
  const pediatricians = [
    {
      id: 1,
      name: "Dr. Naman",
      available: "Mon, Wed, Fri (9am - 1pm)",
    },
    {
      id: 2,
      name: "Dr. Jakir",
      available: "Tue, Thu (10am - 3pm)",
    },
    {
      id: 3,
      name: "Dr. Laxmanan",
      available: "Sat (8am - 12pm)",
    }
  ];

  useEffect(() => {
    setFilteredDoctors(pediatricians);
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
          doctors={pediatricians}
          onFilterChange={handleFilterChange}
        />
       
        <div className="doctor-content">
          <div className="doctor-main">
            <div className="doctor-image-section">
              <img
                src="https://www.shutterstock.com/image-photo/mother-baby-stethoscope-pediatrician-healthcare-260nw-2310717197.jpg"
                alt="Pediatrician Department"
              />
            </div>

            <div className="doctor-list-section">
              <h2>Available Pediatricians</h2>
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
            <HealthTip specialty="Pediatrician" />
            <DoctorOfDay specialty="Pediatrician" />
          </div>
        </div>
      </div>
      <ThemeToggle />
    </>
  );
}

export default Pediatrician;