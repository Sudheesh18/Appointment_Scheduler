import React from 'react';

const DoctorOfDay = ({ specialty }) => {
  const featuredDoctors = {
    Dentist: {
      name: "Dr. Sanjay",
      specialization: "Cosmetic Dentistry",
      experience: "15+ years"
    },
    Cardiologist: {
      name: "Dr. Abinav",
      specialization: "Interventional Cardiology",
      experience: "12+ years"
    },
    Neurologist: {
      name: "Dr. Xavier",
      specialization: "Neurodegenerative Disorders",
      experience: "18+ years"
    },
    Psychiatrist: {
      name: "Dr. Raghul",
      specialization: "Cognitive Behavioral Therapy",
      experience: "10+ years"
    },
    Pulmonologist: {
      name: "Dr. Ayesha",
      specialization: "Respiratory Care",
      experience: "14+ years"
    },
    Pediatrician: {
      name: "Dr. Naman",
      specialization: "Child Development",
      experience: "15+ years"
    }
  };

  const doctor = featuredDoctors[specialty] || {
    name: "Not Available",
    specialization: "",
    experience: ""
  };

  return (
    <div className="doctor-of-day">
      <h3>Featured Doctor</h3>
      <div className="doctor-of-day-info">
        <h4>{doctor.name}</h4>
        <p><strong>Specialization:</strong> {doctor.specialization}</p>
        <p><strong>Experience:</strong> {doctor.experience}</p>
      </div>
    </div>
  );
};

export default DoctorOfDay;