import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [appointmentRequests, setAppointmentRequests] = useState([]);
  const [weeklyTotal, setWeeklyTotal] = useState(0);
  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const [activeSection, setActiveSection] = useState('appointments');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [currentRequestId, setCurrentRequestId] = useState(null);
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
    const dummyRequests = [
      { id: 1, name: 'Charlie Brown', email: 'charlie@brown.com', doctor: 'Dr. Lee', date: '2025-05-10', time: '11:00 AM' },
      { id: 2, name: 'Daisy Green', email: 'daisy@green.com', doctor: 'Dr. Zhang', date: '2025-05-12', time: '9:30 AM' },
    ];

    setAppointments(dummyAppointments);
    setFilteredAppointments(dummyAppointments);
    setUsers(dummyUsers);
    setFilteredUsers(dummyUsers);
    setAppointmentRequests(dummyRequests);
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
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (activeSection === 'appointments') {
      const filtered = appointments.filter(
        (appt) =>
          appt.name.toLowerCase().includes(query) ||
          appt.email.toLowerCase().includes(query) ||
          appt.doctor.toLowerCase().includes(query)
      );
      setFilteredAppointments(filtered);
    } else if (activeSection === 'users') {
      const filtered = users.filter(
        (user) =>
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
      );
      setFilteredUsers(filtered);
    } else if (activeSection === 'appointment-requests') {
      const filtered = appointmentRequests.filter(
        (request) =>
          request.name.toLowerCase().includes(query) ||
          request.email.toLowerCase().includes(query) ||
          request.doctor.toLowerCase().includes(query)
      );
      setAppointmentRequests(filtered);
    }
  };

  const handleApproveRequest = (id) => {
    setCurrentRequestId(id);
    setModalMessage('Appointment has been approved.');
    setEmailMessage('Your appointment request has been approved.');
    setModalVisible(true);
  };

  const handleRejectRequest = (id) => {
    setCurrentRequestId(id);
    setModalMessage('Appointment has been rejected.');
    setEmailMessage('Your appointment request has been rejected.');
    setModalVisible(true);
  };

  const handleSendEmail = () => {
    // In a real application, you would send the email through an API here
    console.log('Sending email to:', appointmentRequests.find((r) => r.id === currentRequestId).email);
    console.log('Email message:', emailMessage);
    setModalVisible(false);
  };

  return (
    <>
      <nav className="admin-nav">
        <button onClick={() => setActiveSection('appointments')}>Scheduled Appointments Today</button>
        <button onClick={() => setActiveSection('analytics')}>This Week / Month Stats</button>
        <button onClick={() => setActiveSection('users')}>Registered Users</button>
        <button onClick={() => setActiveSection('management')}>Doctor Management Panel</button>
        <button onClick={() => setActiveSection('appointment-requests')}>Enabling Appointment Request</button>
        {(activeSection === 'appointments' || activeSection === 'users' || activeSection === 'appointment-requests') && (
          <input
            type="text"
            className="search-input"
            placeholder={
              activeSection === 'appointments'
                ? 'Search by name, email, or doctor'
                : activeSection === 'users'
                ? 'Search by name or email'
                : 'Search by name, email, or doctor'
            }
            value={searchQuery}
            onChange={handleSearch}
          />
        )}
      </nav>

      <div className="admin-dashboard">
        {activeSection === 'appointments' && (
          <>
            <h2>All Scheduled Appointments</h2>
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
                {filteredAppointments.map((appt, index) => (
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
          </>
        )}

        {activeSection === 'analytics' && (
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
        )}

        {activeSection === 'users' && (
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
                {filteredUsers.map((user) => (
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
        )}

        {activeSection === 'appointment-requests' && (
          <div className="appointment-requests-section">
            <h2>Appointment Requests</h2>
            <table className="requests-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {appointmentRequests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.name}</td>
                    <td>{request.email}</td>
                    <td>{request.doctor}</td>
                    <td>{request.date}</td>
                    <td>{request.time}</td>
                    <td>
                      <button className="approve-btn" onClick={() => handleApproveRequest(request.id)}>✔️</button>
                      <button className="reject-btn" onClick={() => handleRejectRequest(request.id)}>❌</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeSection === 'management' && (
          <div className="management-section">
            <h2>Doctor Management Panel</h2>
            <div className="management-box" onClick={() => navigate('/manage-doctors')}>
              <h3>Management of Doctors</h3>
              <p>View and monitor all doctor-wise scheduled appointments</p>
            </div>
          </div>
        )}
      </div>

      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-box">
            <p>{modalMessage}</p>
            <textarea
              placeholder="Type your email message here..."
              value={emailMessage}
              onChange={(e) => setEmailMessage(e.target.value)}
              rows="4"
              className="email-textarea"
            />
            <div className="modal-actions">
              <button className="modal-send-btn" onClick={handleSendEmail}>Send Email</button>
              <button className="modal-close-btn" onClick={() => setModalVisible(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
