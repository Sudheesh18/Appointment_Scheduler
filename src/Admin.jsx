import React from 'react';
import { useLocation } from 'react-router-dom';

function Admin() {
  const location = useLocation();
  const department = location.state?.department || 'Unknown';

  const doctors = location.state?.doctors || [];

  return (
    <div>
      <h1>Admin Panel: {department}</h1>
      <ul>
        {doctors.map((doc) => (
          <li key={doc.id}>
            <h3>{doc.name}</h3>
            <p><strong>Available:</strong> {doc.available}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
