import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Doctor.css';
import NavigationBar from './NavigationBar';
import SearchAndFilter from './SearchAndFilter';
import HealthTip from './HealthTip';
import DoctorOfDay from './DoctorOfDay';
import ThemeToggle from './ThemeToggle';

function Psychiatrist() {
  const navigate = useNavigate();
  const [filteredDoctors, setFilteredDoctors] = useState([]);
 
  const psychiatrists = [
    {
      id: 1,
      name: "Dr. Raghul",
      available: "Mon, Tue, Thu (9am - 1pm)",
    },
    {
      id: 2,
      name: "Dr. Vikram",
      available: "Wed, Fri (10am - 3pm)",
    },
    {
      id: 3,
      name: "Dr. Priyananthan",
      available: "Sat (10am - 12pm)",
    }
  ];

  useEffect(() => {
    setFilteredDoctors(psychiatrists);
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
          doctors={psychiatrists}
          onFilterChange={handleFilterChange}
        />
       
        <div className="doctor-content">
          <div className="doctor-main">
            <div className="doctor-image-section">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/013/504/818/small_2x/feeling-sadness-young-frustrated-man-solving-his-mental-problems-while-having-therapy-session-with-psychologist-photo.jpg"
                alt="Psychiatrist Department"
              />
            </div>

            <div className="doctor-list-section">
              <h2>Available Psychiatrists</h2>
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
            <HealthTip specialty="Psychiatrist" />
            <DoctorOfDay specialty="Psychiatrist" />
          </div>
        </div>
      </div>
      <ThemeToggle />
    </>
  );
}

export default Psychiatrist;