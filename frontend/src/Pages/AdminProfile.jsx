import React from 'react'
import './CSS/AdminProfile.css'
import {useUser} from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'


export const AdminProfile = () => {

    const {user} = useUser()
    const navigate = useNavigate()

const handleViewTransactions = () => {
    navigate('/transactions');
};

const handleManageAccounts = () => {
    navigate('/manage-accounts');
};

const handleEditInventory = () => {
    navigate('/edit-inventory');
};

return (
    <div className='profile'>
        <h1>Admin Profile</h1>
        <p>Name: {user.profile.name}</p>
        <p>Email: {user.profile.email}</p>
        <div className="admin-buttons">
            <button onClick={handleViewTransactions}>View all transactions</button>
            <button onClick={handleManageAccounts}>Manage Accounts</button>
            <button onClick={handleEditInventory}>Edit Inventory</button>
        </div>
    </div>
);
};

export default AdminProfile;