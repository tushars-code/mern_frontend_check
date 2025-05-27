import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ fetchUsers, editingUser, setEditingUser }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (editingUser) setFormData(editingUser);
  }, [editingUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingUser) {
      await axios.put(`https://mern-backend-check.onrender.com/api/users/${editingUser._id}`, formData);
      setEditingUser(null);
    } else {
      await axios.post('https://mern-backend-check.onrender.com/api/users', formData);
    }
    fetchUsers();
    setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Name" />
      <input value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="Email" />
      <button type="submit">{editingUser ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;
