import React from 'react';
import './UserAppointments.css';

function UserAppointments() {
  // Sample appointment data
  const appointments = [
    {
      doctor: 'Dr. Ayesha',
      date: '2025-05-18',
      time: '10:30 AM'
    },
    {
      doctor: 'Dr. Sanjay',
      date: '2025-05-21',
      time: '02:00 PM'
    },
  ];

  return (
    <div className="appointments-container">
      <h2>Your Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments scheduled.</p>
      ) : (
        <ul className="appointment-list">
          {appointments.map((appt, index) => (
            <li key={index} className="appointment-card">
              <h3>{appt.doctor}</h3>
              <p><strong>Date:</strong> {appt.date}</p>
              <p><strong>Time:</strong> {appt.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserAppointments;
