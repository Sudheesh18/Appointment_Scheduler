import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Doctor.css';

function Pulmonologist() {
  const navigate = useNavigate();

  const pulmonologists = [
    {
      id: 1,
      name: "Dr. Ayesha Khan",
      available: "Mon, Wed, Fri (11am - 3pm)",
    },
    {
      id: 2,
      name: "Dr. Ramesh Patel",
      available: "Tue, Thu (10am - 2pm)",
    },
    {
      id: 3,
      name: "Dr. Sandeep Verma",
      available: "Sat (9am - 12pm)",
    }
  ];

  const handleSchedule = (doctorId) => {
    alert("Thank you for your request, your appointment will be scheduled soon");
    navigate('/');
  };

  return (
    <div className="doctor-page">
      <div className="doctor-image-section">
        <img 
          src="data:image/jpeg;base64,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" 
          alt="Pulmonologist Department"
        />
      </div>

      <div className="doctor-list-section">
        <h2>Available Pulmonologists</h2>
        <ul className="doctor-list">
          {pulmonologists.map((doc) => (
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
  );
}

export default Pulmonologist;