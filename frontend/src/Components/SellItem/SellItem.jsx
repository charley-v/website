import React, { useState } from 'react';
import './SellItem.css';

const SellItem = ({ item, onConfirmSell, onClose }) => {
    const [price, setPrice] = useState('');

    const handleConfirm = () => {
        if (price) {
            onConfirmSell(item, price); // Uses the correct function reference
        }
    };

    return (
        <div className="sell-item-modal">
            <div className="sell-item-content">
                <div className="sell-item-left">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="sell-item-right">
                    <h2>{item.name}</h2>
                    <p>Wear: {item.wear}</p>
                    <p>StatTrak: {item.statTrak ? 'Yes' : 'No'}</p>
                    <div className="sell-price-input">
                        <label>Sell item for: $</label>
                        <input 
                            type="number" 
                            value={price} 
                            onChange={e => setPrice(e.target.value)} 
                            placeholder="Enter price" 
                        />
                    </div>
                    <button onClick={handleConfirm} className="sell-confirm-button">Confirm Sell</button>
                    <button onClick={onClose} className="close-button">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default SellItem;
