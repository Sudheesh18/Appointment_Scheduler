import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Dashboard from './Dashboard';
import Dentist from './Dentist';
import Cardiologist from './Cardiologist';
import Neurologist from './Neurologist';
import Pulmonologist from './Pulmonologist';
import Psychiatrist from './Psychiatrist';
import Pediatrician from './Pediatrician';
import AdminDashboard from './AdminDashboard';
import ManageDoctors from './ManageDoctors';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dentist" element={<Dentist />} />
        <Route path="/Cardiologist" element={<Cardiologist />} />
        <Route path="/Neurologist" element={<Neurologist />} />
        <Route path="/Pulmonologist" element={<Pulmonologist />} />
        <Route path="/Psychiatrist" element={<Psychiatrist />} />
        <Route path="/Pediatrician" element={<Pediatrician />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/manage-doctors" element={<ManageDoctors />} /> 
      </Routes>
    </Router>
  );
}

export default App;
