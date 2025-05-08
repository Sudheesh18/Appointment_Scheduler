import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [users, setUsers] = useState([]);
  const [weeklyTotal, setWeeklyTotal] = useState(0);
  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const dummyAppointments = [
      {
        name: 'Alice Smith',
        email: 'alice@gmail.com',
        doctor: 'Dr. Patel',
        day: 'Monday',
        time: '10:30 AM',
        date: '2025-05-07',
      },
      {
        name: 'Bob Johnson',
        email: 'bob@yahoo.com',
        doctor: 'Dr. Khan',
        day: 'Wednesday',
        time: '2:00 PM',
        date: '2025-05-01',
      },
    ];
    const dummyUsers = [
      { id: 1, name: 'Alice Smith', email: 'alice@gmail.com' },
      { id: 2, name: 'Bob Johnson', email: 'bob@yahoo.com' },
      { id: 3, name: 'Spam Bot', email: 'bot123@spam.com' },
    ];

    setAppointments(dummyAppointments);
    setUsers(dummyUsers);
    calculateStats(dummyAppointments);
  }, []);

  const calculateStats = (appointments) => {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());

    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const weekly = appointments.filter((appt) => {
      const d = new Date(appt.date);
      return d >= startOfWeek && d <= now;
    }).length;

    const monthly = appointments.filter((appt) => {
      const d = new Date(appt.date);
      return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
    }).length;

    setWeeklyTotal(weekly);
    setMonthlyTotal(monthly);
  };

  const handleRemoveUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <div className="admin-dashboard">
      {/* All Scheduled Appointments Heading */}
      <h2>All Scheduled Appointments</h2>

      {/* Appointments Table */}
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Doctor</th>
            <th>Day</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt, index) => (
            <tr key={index}>
              <td>{appt.name}</td>
              <td>{appt.email}</td>
              <td>{appt.doctor}</td>
              <td>{appt.day}</td>
              <td>{appt.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Analytics Section (This Week, This Month) */}
      <div className="analytics-section">
        <div className="analytics-box">
          <h3>This Week</h3>
          <p>{weeklyTotal} Appointments</p>
        </div>
        <div className="analytics-box">
          <h3>This Month</h3>
          <p>{monthlyTotal} Appointments</p>
        </div>
      </div>

      {/* Registered Users */}
      <div className="users-section">
        <h2>Registered Users</h2>
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="remove-button" onClick={() => handleRemoveUser(user.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Management Section */}
      <div className="management-section">
        <h2>Doctor Management Panel</h2>
        <div className="management-box" onClick={() => navigate('/manage-doctors')}>
          <h3>Management of Doctors</h3>
          <p>View and monitor all doctor-wise scheduled appointments</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
