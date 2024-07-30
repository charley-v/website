import React from 'react'
import './CSS/GuestProfile.css'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../Context/UserContext'
import knives from '../Components/Assets/Inventory'

export const GuestProfile = () => {
  const { user } = useUser()
  const navigate = useNavigate()

  const handleTransactionHistory = () => {
    navigate('/transaction-history')
  }

  const handleEditProfile = () => {
    navigate('/edit-profile')
  }

  const handleChangePassword = () => {
    navigate('/change-password')
  }

  return (
    <div>
      <div className='profile'>
        <h1>User Profile</h1>
        <p>Name: {user.profile.name}</p>
        <p>Email: {user.profile.email}</p>
        <p>Username: {user.profile.username}</p>
        <div className="profile-buttons">
          <button onClick={handleTransactionHistory}>Transaction History</button>
          <button onClick={handleEditProfile}>Edit Profile</button>
          <button onClick={handleChangePassword}>Change Password</button>
        </div>
      </div>
      <div className="inventory">
        <h1>Inventory</h1>
        <div className="inventory-grid">
          {knives.map((knife) => (
            <div key={knife.id} className="inventory-item">
              <img src={knife.image} alt={knife.name} />
              <p>{knife.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GuestProfile
