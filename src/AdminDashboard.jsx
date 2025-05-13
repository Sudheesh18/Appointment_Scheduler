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
  const [currentUserId, setCurrentUserId] = useState(null);
  const [modalContext, setModalContext] = useState(''); // 'request' or 'user'
  const navigate = useNavigate();

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  useEffect(() => {
    const dummyAppointments = [
      {
        name: 'Dinesh',
        email: 'dinesh@gmail.com',
        doctor: 'Dr. Patel',
        day: 'Tuesday',
        time: '10:30 AM',
        date: '2025-05-13',
      },
      {
        name: 'anirudh',
        email: 'anirudh@gmail.com',
        doctor: 'Dr. Khan',
        day: 'Wednesday',
        time: '2:00 PM',
        date: '2025-05-14',
      },
    ];
    const dummyUsers = [
      { id: 1, name: 'Dinesh', email: 'dinesh@gmail.com' },
      { id: 2, name: 'Vimal', email: 'vimal@gmail.com' },
      { id: 3, name: 'Spam Bot', email: 'bot123@spam.com' },
    ];
    const dummyRequests = [
      { id: 1, name: 'mary', email: 'mary@gmail.com', doctor: 'Dr. Manoj', date: '2025-05-10', time: '11:00 AM' },
      { id: 2, name: 'priya', email: 'priya@gmail.com', doctor: 'Dr. Sasi', date: '2025-05-12', time: '9:30 AM' },
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
    setModalContext('request');
    setModalMessage('Appointment has been approved.');
    setEmailMessage('Your appointment request has been approved.');
    setModalVisible(true);
  };

  const handleRejectRequest = (id) => {
    setCurrentRequestId(id);
    setModalContext('request');
    setModalMessage('Appointment has been rejected.');
    setEmailMessage('Your appointment request has been rejected.');
    setModalVisible(true);
  };

  const handleRemoveUser = (id) => {
    setCurrentUserId(id);
    setModalContext('user');
    setModalMessage('User will be removed from the system.');
    setEmailMessage('Your account has been removed by the administrator.');
    setModalVisible(true);
  };

  const handleSendEmail = () => {
    if (modalContext === 'request') {
      const recipient = appointmentRequests.find((r) => r.id === currentRequestId);
      if (recipient) {
        console.log('Sending email to:', recipient.email);
        console.log('Email message:', emailMessage);
      }
    } else if (modalContext === 'user') {
      const recipient = users.find((u) => u.id === currentUserId);
      if (recipient) {
        console.log('Sending email to:', recipient.email);
        console.log('Email message:', emailMessage);
      }
      const updatedUsers = users.filter((user) => user.id !== currentUserId);
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers);
    }
    setModalVisible(false);
  };

  const handleMailboxClick = () => {
    alert('Redirecting to Admin Mailbox...');
  };

  const handleTodayAppointments = () => {
    const todayAppointments = appointments.filter((appt) => appt.date === getTodayDate());
    setFilteredAppointments(todayAppointments);
    setActiveSection('appointments');
  };

  return (
    <>
      <nav className="admin-nav">
        <button onClick={handleTodayAppointments}>Scheduled Appointments Today</button>
        <button onClick={() => setActiveSection('analytics')}>This Week / Month Stats</button>
        <button onClick={() => setActiveSection('users')}>Registered Users</button>
        <button onClick={() => setActiveSection('management')}>Doctor Management Panel</button>
        <button onClick={() => setActiveSection('appointment-requests')}>Enabling Appointment Request</button>

        <div className="mailbox-icon" onClick={handleMailboxClick} title="Mailbox">
          📬
        </div>

        {(activeSection === 'appointments' || activeSection === 'users' || activeSection === 'appointment-requests') && (
          <input
            type="text"
            className="search-input"
            placeholder={activeSection === 'appointments' ? 'Search by name, email, or doctor' : 'Search by name or email'}
            value={searchQuery}
            onChange={handleSearch}
          />
        )}
      </nav>

      <div className="admin-dashboard">
        {activeSection === 'appointments' && (
          <>
            <h2>Scheduled Appointments</h2>
            {filteredAppointments.length === 0 ? (
              <p>No appointments scheduled today.</p>
            ) : (
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
            )}
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
            <label className="modal-label">To:</label>
            <input
              type="email"
              className="modal-input"
              value={
                modalContext === 'request'
                  ? appointmentRequests.find((r) => r.id === currentRequestId)?.email || ''
                  : users.find((u) => u.id === currentUserId)?.email || ''
              }
              disabled
            />

            <label className="modal-label">Message:</label>
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
