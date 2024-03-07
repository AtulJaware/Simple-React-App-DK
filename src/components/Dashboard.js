import React from 'react';
import './Dashboard.css'; 

const Dashboard = ({ users, onEdit, onDelete }) => {
    const handleGoBack   = () => window.history.back();
  return (
    <div className="dashboard-container">
        <h1>Dashboard Page</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Comment</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.country}</td>
              <td>{user.comment}</td>
              <td>{user.gender}</td>
              <td>
                <button onClick={() => onEdit(user.id)}>Edit</button>
                <button style={{backgroundColor: 'red' }} onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button style={{backgroundColor:'lightskyblue',marginTop:'10px',color:'black'}} onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default Dashboard;
