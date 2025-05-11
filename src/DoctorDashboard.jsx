import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, appointments } = location.state || {};

  const [appointmentsList, setAppointmentsList] = useState(appointments || []);
  const [showMailBox, setShowMailBox] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [emailMessage, setEmailMessage] = useState("");

  // Function to handle appointment cancelation
  const cancelAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setShowMailBox(true); // Show the mail box
  };

  const handleSendEmail = () => {
    // Simulate sending an email (For real-world, you can integrate email APIs)
    console.log("Sending email to:", selectedAppointment.patientEmail);
    console.log("Message:", emailMessage);

    // Remove the canceled appointment from the list
    const updatedAppointments = appointmentsList.filter(
      (appointment) => appointment.id !== selectedAppointment.id
    );
    setAppointmentsList(updatedAppointments);
    setShowMailBox(false); // Close the mail box after sending
  };

  return (
    <div className="doctor-dashboard">
      <h1>Welcome, Dr. {name}!</h1>
      <h2>Your Appointments:</h2>

      {appointmentsList.length > 0 ? (
        <ul>
          {appointmentsList.map((appointment) => (
            <li key={appointment.id}>
              <div className="appointment-info">
                <strong>{appointment.patientName}</strong>
                <p>Time: {appointment.time}</p>
                <p>Appointment ID: {appointment.id}</p>
              </div>
              <button
                className="cancel-btn"
                onClick={() => cancelAppointment(appointment)}
              >
                Cancel Appointment
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-appointments">You have no appointments scheduled.</p>
      )}

      <button className="back-btn" onClick={() => navigate('/')}>
        Go Back
      </button>

      {/* Mail Box Modal or Inline Form */}
      {showMailBox && (
        <div className="mail-box">
          <h3>Send Cancellation Email</h3>
          <div className="mail-content">
            <p><strong>To:</strong> {selectedAppointment.patientEmail}</p>
            <p><strong>Subject:</strong> Appointment Cancellation</p>
            <textarea
              placeholder="Enter your message here..."
              value={emailMessage}
              onChange={(e) => setEmailMessage(e.target.value)}
            />
          </div>
          <div className="mail-actions">
            <button onClick={handleSendEmail}>Send & Cancel Appointment</button>
            <button onClick={() => setShowMailBox(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;
