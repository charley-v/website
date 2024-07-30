import React, { useState, useEffect } from 'react';
import './CSS/ManageInventory.css';
import { useNavigate } from 'react-router-dom';
import availableknives from '../Components/Assets/availableknives';

const ManageInventory = () => {
    const [inventory, setInventory] = useState([]);
    const [newKnife, setNewKnife] = useState({
        id: '',
        name: '',
        category: '',
        image: '',
        knife_price: '',
        quantity: ''
    });
    const [editKnife, setEditKnife] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Initialize inventory data
        setInventory(availableknives);
    }, []);

    const handleBack = () => {
        navigate('/admin');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewKnife(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddKnife = () => {
        if (Object.values(newKnife).some(field => !field)) {
            alert('Please fill in all fields');
            return;
        }
        setInventory(prevInventory => [
            ...prevInventory,
            { ...newKnife, id: Date.now() } // Using timestamp as a unique ID
        ]);
        setNewKnife({
            id: '',
            name: '',
            category: '',
            image: '',
            knife_price: '',
            quantity: ''
        });
    };

    const handleEditClick = (knife) => {
        setEditKnife(knife);
        setNewKnife(knife);
    };

    const handleSaveEdit = () => {
        if (Object.values(newKnife).some(field => !field)) {
            alert('Please fill in all fields');
            return;
        }
        setInventory(prevInventory => prevInventory.map(knife =>
            knife.id === newKnife.id ? newKnife : knife
        ));
        setNewKnife({
            id: '',
            name: '',
            category: '',
            image: '',
            knife_price: '',
            quantity: ''
        });
        setEditKnife(null);
    };

    const handleDeleteClick = (id) => {
        setInventory(prevInventory => prevInventory.filter(knife => knife.id !== id));
    };

    return (
        <div className='inventory'>
            <h1>Manage Inventory</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td><img src={item.image} alt={item.name} style={{ width: '50px' }} /></td>
                            <td>${item.knife_price.toFixed(2)}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button onClick={() => handleEditClick(item)}>Edit</button>
                                <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="add-knife-form">
                <h2>{editKnife ? 'Edit Knife' : 'Add New Knife'}</h2>
                <input
                    type="text"
                    name="name"
                    value={newKnife.name}
                    onChange={handleInputChange}
                    placeholder="Knife Name"
                />
                <input
                    type="text"
                    name="category"
                    value={newKnife.category}
                    onChange={handleInputChange}
                    placeholder="Category"
                />
                <input
                    type="text"
                    name="image"
                    value={newKnife.image}
                    onChange={handleInputChange}
                    placeholder="Image URL"
                />
                <input
                    type="number"
                    name="knife_price"
                    value={newKnife.knife_price}
                    onChange={handleInputChange}
                    placeholder="Price"
                />
                <input
                    type="number"
                    name="quantity"
                    value={newKnife.quantity}
                    onChange={handleInputChange}
                    placeholder="Quantity"
                />
                {editKnife ? (
                    <button onClick={handleSaveEdit}>Save Changes</button>
                ) : (
                    <button onClick={handleAddKnife}>Add Knife</button>
                )}
            </div>
            <div className="inventory-buttons">
                <button onClick={handleBack}>Back to Admin Profile</button>
            </div>
        </div>
    );
};

export default ManageInventory;