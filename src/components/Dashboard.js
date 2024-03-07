import React, { useState } from 'react';
import './Dashboard.css'; 

const Dashboard = ({ users, onEdit, onDelete }) => {
    const handleGoBack   = () => window.history.back();
    const [editableUserId, setEditableUserId] = useState(null);

  const handleEditClick = (userId) => {
    setEditableUserId(userId);
  };

  const handleSaveClick = (id,user) => {
    setEditableUserId(null);
    onEdit(id,user);
    // You can implement logic to save changes to the server if needed
  };

  const handleKeyDown = (event, userId) => {
    if (event.key === 'Enter') {
      setEditableUserId(null);
      // You can implement logic to save changes to the server if needed
    }
  };
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
              <td
                contentEditable={editableUserId === user.id}
                suppressContentEditableWarning={true}
                onKeyDown={(e) => handleKeyDown(e, user.id)}
              >
                {user.name}
              </td>
              <td
                contentEditable={editableUserId === user.id}
                suppressContentEditableWarning={true}
                onKeyDown={(e) => handleKeyDown(e, user.id)}
              >
                {user.country}
              </td>
              <td
                contentEditable={editableUserId === user.id}
                suppressContentEditableWarning={true}
                onKeyDown={(e) => handleKeyDown(e, user.id)}
              >
                {user.comment}
              </td>
              <td
                contentEditable={editableUserId === user.id}
                suppressContentEditableWarning={true}
                onKeyDown={(e) => handleKeyDown(e, user.id)}
              >
                {user.gender}
              </td>
              <td>
                {editableUserId === user.id ? (
                  <button style={{ backgroundColor: 'green'}} onClick={() => handleSaveClick(user.id,user)}><b>Save</b></button>
                ) : (
                  <button onClick={() => handleEditClick(user.id)}>Edit</button>
                )}
                <button style={{ backgroundColor: 'red' }} onClick={() => onDelete(user.id)}>
                  Delete
                </button>
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
