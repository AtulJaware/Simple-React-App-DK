import './App.css';
import React, { useState, useEffect } from 'react';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import { useNavigate } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    // Fetch data from the server on component mount
    fetch('http://localhost:3001/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleRegister = (userData) => {
    // Send data to the server and update the state
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => setUsers([...users, data]));
      alert("Registration Successful!");
      navigate("/dashboard");
  };

  const handleEdit = (userId, updatedData) => {
    // Update user data on the server and update the state
    fetch(`http://localhost:3001/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then(() => {
        const updatedUsers = users.map((user) =>
          user.id === userId ? { ...user, ...updatedData } : user
        );
        setUsers(updatedUsers);
      });
  };

  const handleDelete = (userId) => {
    // Delete user from the server and update the state
    window.confirm  ('Are you sure want to Delete?') &&
    fetch(`http://localhost:3001/users/${userId}`, {
      method: 'DELETE',
    }).then(() => {
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
      alert("User deleted successfully!");
    });
  };

  return (
    <div>
      {/* <RegistrationForm onRegister={handleRegister} />
      <Dashboard users={users} onEdit={handleEdit} onDelete={handleDelete} /> */}
      <Routes>
        <Route path='/' element={<RegistrationForm onRegister={handleRegister} />} />
        <Route path='/dashboard' element={<Dashboard users={users} onEdit={handleEdit} onDelete={handleDelete} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
