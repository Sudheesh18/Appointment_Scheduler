import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const isAdmin = formData.role === 'admin';

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (isAdmin && ['fullName', 'email', 'phone', 'password', 'confirmPassword'].includes(name)) {
      // Prevent editing admin fields
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.role === 'admin') {
      const isAdminValid =
        formData.fullName === 'Sudheesh V G' &&
        formData.email === 'sudheeshgirish150@gmail.com' &&
        formData.phone === '1234567890' &&
        formData.password === '1234';

      if (!isAdminValid) {
        setError('Unauthorized admin credentials');
        return;
      }

      alert('Admin registered successfully!');
      navigate('/admin-dashboard');
    } else {
      alert('User registered successfully!');
      navigate('/dashboard');
    }
  };

  return (
    <>
      <h1 className="hosp-title1">YOUR LIFE IS OUR LIFE</h1><br /><br />
      <h1 className="hosp-title2">GMPNPS HOSPITAL</h1>
      <div className="register-wrapper">
        <form className="register-box" onSubmit={handleSubmit}>
          <h2 className="register-title">Create Account</h2>

          {error && <div className="register-error">{error}</div>}

          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <div className="custom-input">
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={isAdmin ? 'Sudheesh V G' : formData.fullName}
                onChange={handleChange}
                required
                readOnly={isAdmin}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <div className="custom-input">
              <input
                type="email"
                name="email"
                id="email"
                value={isAdmin ? 'sudheeshgirish150@gmail.com' : formData.email}
                onChange={handleChange}
                required
                readOnly={isAdmin}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="custom-input">
              <input
                type="tel"
                name="phone"
                id="phone"
                value={isAdmin ? '1234567890' : formData.phone}
                onChange={handleChange}
                required
                readOnly={isAdmin}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="custom-input">
              <input
                type="password"
                name="password"
                id="password"
                value={isAdmin ? '1234' : formData.password}
                onChange={handleChange}
                required
                readOnly={isAdmin}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="custom-input">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={isAdmin ? '1234' : formData.confirmPassword}
                onChange={handleChange}
                required
                readOnly={isAdmin}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="role">LOGIN AS</label>
            <div className="custom-input">
              <select name="role" id="role" value={formData.role} onChange={handleChange} required>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
