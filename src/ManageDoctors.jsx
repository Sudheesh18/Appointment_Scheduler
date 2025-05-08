import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageDoctors.css';

const ManageDoctors = () => {
  const navigate = useNavigate();

  const doctors = [
    { name: 'Dr. Abinav', specialty: 'Cardiologist' },
    { name: 'Dr. Barath', specialty: 'Cardiologist' },
    { name: 'Dr. Charan', specialty: 'Cardiologist' },
    { name: 'Dr. Xavier', specialty: 'Neurologist' },
    { name: 'Dr. Yaazhan', specialty: 'Neurologist' },
    { name: 'Dr. Vignesh', specialty: 'Neurologist' },
    { name: 'Dr. Raghul', specialty: 'Psychiatrist' },
    { name: 'Dr. Vikram', specialty: 'Psychiatrist' },
    { name: 'Dr. Priyananthan', specialty: 'Psychiatrist' },
    { name: 'Dr. Naman', specialty: 'Pediatrician' },
    { name: 'Dr. Jakir', specialty: 'Pediatrician' },
    { name: 'Dr. Laxmanan', specialty: 'Pediatrician' },
    { name: 'Dr. Ayesha ', specialty: 'Pulmonologist' },
    { name: 'Dr. Ramesh', specialty: 'Pulmonologist' },
    { name: 'Dr. Sandeep', specialty: 'Pulmonologist' },
    { name: 'Dr. Sanjay', specialty: 'Dentist' },
    { name: 'Dr. selvan', specialty: 'Dentist' },
    { name: 'Dr. Uday', specialty: 'Dentist' },
  ];

  return (
    <div className="manage-doctors-container">
      <h2>Manage Doctors</h2>

      <div className="doctor-row">
        {doctors.slice(0, 3).map((doctor, index) => (
          <div key={index} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <button onClick={() => navigate(`/appointments/${doctor.name}`)}>
              View Appointments
            </button>
          </div>
        ))}
      </div>

      <div className="doctor-row">
        {doctors.slice(3, 6).map((doctor, index) => (
          <div key={index} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <button onClick={() => navigate(`/appointments/${doctor.name}`)}>
              View Appointments
            </button>
          </div>
        ))}
      </div>

      <div className="doctor-row">
        {doctors.slice(6, 9).map((doctor, index) => (
          <div key={index} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <button onClick={() => navigate(`/appointments/${doctor.name}`)}>
              View Appointments
            </button>
          </div>
        ))}
      </div>

      <div className="doctor-row">
        {doctors.slice(9, 12).map((doctor, index) => (
          <div key={index} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <button onClick={() => navigate(`/appointments/${doctor.name}`)}>
              View Appointments
            </button>
          </div>
        ))}
      </div>

      <div className="doctor-row">
        {doctors.slice(12, 15).map((doctor, index) => (
          <div key={index} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <button onClick={() => navigate(`/appointments/${doctor.name}`)}>
              View Appointments
            </button>
          </div>
        ))}
      </div>

      <div className="doctor-row">
        {doctors.slice(15, 18).map((doctor, index) => (
          <div key={index} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <button onClick={() => navigate(`/appointments/${doctor.name}`)}>
              View Appointments
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageDoctors;
