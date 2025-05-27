import React from 'react';
import axios from 'axios';

const UserList = ({ users, fetchUsers, setEditingUser }) => {
  const handleDelete = async (id) => {
    await axios.delete(`https://mern-backend-check.onrender.com/api/users/${id}`);
    fetchUsers();
  };

  return (
    <ul>
      {users.map(user => (
        <li key={user._id}>
          {user.name} ({user.email})
          <button onClick={() => setEditingUser(user)}>Edit</button>
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
