import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Doctor.css';
import NavigationBar from './NavigationBar';
import SearchAndFilter from './SearchAndFilter';
import HealthTip from './HealthTip';
import DoctorOfDay from './DoctorOfDay';
import ThemeToggle from './ThemeToggle';

function Cardiologist() {
  const navigate = useNavigate();
  const [filteredDoctors, setFilteredDoctors] = useState([]);
 
  const cardiologists = [
    {
      id: 1,
      name: "Dr. Abinav",
      available: "Mon, Wed, Fri (9am - 1pm)",
    },
    {
      id: 2,
      name: "Dr. Barath",
      available: "Tue, Thu (2pm - 6pm)",
    },
    {
      id: 3,
      name: "Dr. Charan",
      available: "Sat (10am - 12pm)",
    }
  ];

  useEffect(() => {
    setFilteredDoctors(cardiologists);
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
          doctors={cardiologists}
          onFilterChange={handleFilterChange}
        />
       
        <div className="doctor-content">
          <div className="doctor-main">
            <div className="doctor-image-section">
              <img
                src="https://media.istockphoto.com/id/2142793215/photo/cardiovascular-disease-cvd-doctor-with-heart-human-model-anatomy-for-treatment-patient-in.jpg?s=612x612&w=0&k=20&c=Ne1jDPdIO3IDuJOZDECEL7Tn-JzcSYV6O7QNdqUefpo="
                alt="Cardiologist Department"
              />
            </div>

            <div className="doctor-list-section">
              <h2>Available Cardiologists</h2>
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
            <HealthTip specialty="Cardiologist" />
            <DoctorOfDay specialty="Cardiologist" />
          </div>
        </div>
      </div>
      <ThemeToggle />
    </>
  );
}

export default Cardiologist;