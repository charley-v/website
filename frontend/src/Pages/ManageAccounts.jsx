import React, { useState } from 'react';
import './CSS/ManageAccounts.css';
//import { useUser } from '../Context/UserContext';

const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'guest' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'guest' },
  { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'admin' },
];

const ManageAccounts = () => {
  //const { user } = useUser();
  const [users, setUsers] = useState(initialUsers);
  const [editingUser, setEditingUser] = useState(null);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newRole, setNewRole] = useState('');

  const handleEdit = (user) => {
    setEditingUser(user);
    setNewName(user.name);
    setNewEmail(user.email);
    setNewRole(user.role);
  };

  const handleSave = () => {
    setUsers(users.map(u => u.id === editingUser.id ? { ...u, name: newName, email: newEmail, role: newRole } : u));
    setEditingUser(null);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className='manage-accounts-container'>
      <h1>Manage Accounts</h1>
      <div className='accounts-table'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => handleEdit(user)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editingUser && (
        <div className='edit-form'>
          <h2>Edit User</h2>
          <label>Name:</label>
          <input type='text' value={newName} onChange={(e) => setNewName(e.target.value)} />
          <label>Email:</label>
          <input type='email' value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
          <label>Role:</label>
          <select value={newRole} onChange={(e) => setNewRole(e.target.value)}>
            <option value='guest'>Guest</option>
            <option value='admin'>Admin</option>
          </select>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditingUser(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ManageAccounts;
