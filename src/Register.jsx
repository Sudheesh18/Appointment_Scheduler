import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  });

  const [error, setError] = useState('');

  const doctorAppointments = {
    Sanjay: [
      { id: 1, patientName: 'John Doe', time: '9:00 AM' },
      { id: 2, patientName: 'Jane Smith', time: '10:30 AM' },
    ],
    Thanraj: [
      { id: 1, patientName: 'Tom Hardy', time: '8:00 AM' },
      { id: 2, patientName: 'Emma Watson', time: '11:00 AM' },
    ],
  };

  const getDoctorEmail = (name) => {
    const index = doctors.indexOf(name);
    const number = (index + 1).toString().padStart(2, '0');
    return `gmpnps${number}@gmail.com`;
  };

  const doctors = [
    'Sanjay', 'Thanraj', 'Uday', 'Abinav', 'Barath', 'Charan', 'Xavier',
    'Yaazhan', 'Vignesh', 'Raghul', 'Vikram', 'Priyananthan', 'Ayesha',
    'Ramesh', 'Sandeep', 'Naman', 'Jakir', 'Laxmanan'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'role') {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: value,
      });
      setError('');
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const { role, fullName, email, phone, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (role === 'admin') {
      const isValidAdmin =
        fullName === 'Sudheesh V G' &&
        email === 'sudheeshgirish150@gmail.com' &&
        phone === '1234567890' &&
        password === '1234';

      if (!isValidAdmin) {
        setError('Unauthorized admin credentials');
        resetForm();
        return;
      }

      alert('Admin logged in successfully!');
      navigate('/admin-dashboard');
      return;
    }

    if (role === 'doctor') {
      const doctorIndex = doctors.findIndex(
        (name) => name === fullName && email === getDoctorEmail(name)
      );

      const isValidDoctor =
        doctorIndex !== -1 &&
        phone === '1234567890' &&
        password === '1234';

      if (!isValidDoctor) {
        setError('Unauthorized doctor credentials');
        resetForm();
        return;
      }

      const doctorName = doctors[doctorIndex];
      alert(`Doctor ${doctorName} logged in successfully!`);
      navigate('/doctor-dashboard', {
        state: {
          name: doctorName,
          appointments: doctorAppointments[doctorName] || [],
        },
      });
      return;
    }

    alert('User logged in successfully!');
    navigate('/dashboard');
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      role: 'user',
    });
  };

  return (
    <div className="register-page">
      <h1 className="hosp-title1">COMMITTED TO COMPASSIONATE CARE AND MEDICAL EXCELLENCE</h1>
      <h1 className="hosp-title2">GMPNPS Health Clinic</h1>
      <div className="register-wrapper">
        <form className="register-box" onSubmit={handleSubmit}>
          <h2 className="register-title">Login your Account</h2>

          {error && <div className="register-error">{error}</div>}

          {/* Login Role Selection - moved above Full Name */}
          <div className="input-group">
            <label>LOGIN AS</label>
            <select
              className="role-select"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
