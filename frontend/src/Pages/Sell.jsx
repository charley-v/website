import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Context/UserContext';
import './CSS/Sell.css';
import inventory from '../Components/Assets/Inventory';
import SellItem from '../Components/SellItem/SellItem';
import karambitDoppler from '../Components/Assets/Karambit/karambit-Doppler.png';
import m9bayonetLore from '../Components/Assets/M9Bayonet/m9bayonet-Lore.png';
import butterflyFade from '../Components/Assets/ButterflyKnife/butterfly-Fade.png';
import ursusknifecrimsonweb from '../Components/Assets/Ursus Knife/UrsusKnife-crimsonweb.png';
import falchionbluesteel from '../Components/Assets/FalchionKnife/falchion-blue steel.png';

const initialOffers = [
    { id: 201, name: "Karambit | Doppler", wear: "Factory New", statTrak: true, price: 450, image: karambitDoppler },
    { id: 202, name: "M9 Bayonet | Lore", wear: "Field Tested", statTrak: false, price: 330, image: m9bayonetLore },
    { id: 203, name: "Butterfly Knife | Fade", wear: "Minimal Wear", statTrak: true, price: 700, image: butterflyFade },
    { id: 204, name: "Ursus Knife | Crimson Web", wear: "Well-Worn", statTrak: false, price: 250, image: ursusknifecrimsonweb },
    { id: 205, name: "Falchion Knife | Blue Steel", wear: "Battle-Scarred", statTrak: true, price: 200, image: falchionbluesteel }
];

const Sell = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const [mainInventory, setInventory] = useState(inventory);
    const [sellingItems, setSellingItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [marketplaceOffers, setMarketplaceOffers] = useState(initialOffers);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleOpenSellModal = (item) => {
        setSelectedItem(item);
    };

    const confirmSell = (item, price) => {
        const updatedItem = { ...item, price };
        setSellingItems(prevItems => [...prevItems, updatedItem]);
        setInventory(prevInventory => prevInventory.filter(invItem => invItem.id !== item.id));
        setSelectedItem(null);
    };

    const removeFromSellingItems = (item) => {
        setSellingItems(prevItems => prevItems.filter(sellItem => sellItem.id !== item.id));
        setInventory(prevInventory => [...prevInventory, item]);
    };

    const handleBuy = (item) => {
        const confirmMessage = `Are you sure you want to buy this item for $${item.price}?`;
        if (window.confirm(confirmMessage)) {
            alert(`Simulated purchase of ${item.name} for $${item.price}`);
            setMarketplaceOffers(prevOffers => prevOffers.filter(offer => offer.id !== item.id));
        }
    };

    return (
        <div className="sell-container">
            <h1>Sell</h1>
            <div className="inventory-grid">
                <h2>Your Inventory</h2>
                <div className="inventory-items">
                    {mainInventory.map((item) => (
                        <div key={item.id} className="inventory-item">
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <button onClick={() => handleOpenSellModal(item)}>Sell</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="selling-grid">
                <h2>My Offers</h2>
                <div className="selling-items">
                    {sellingItems.map((item, index) => (
                        <div key={index} className="selling-item">
                            <img src={item.image} alt={item.name} />
                            <p>{item.name} - ${item.price}</p>
                            <button onClick={() => removeFromSellingItems(item)}>Remove</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="marketplace-grid">
                <h2>Marketplace Offers</h2>
                <div className="marketplace-items">
                    {marketplaceOffers.map((item) => (
                        <div key={item.id} className="marketplace-item">
                            <img src={item.image} alt={item.name} />
                            <p>{item.name} - {item.wear} - StatTrak: {item.statTrak ? 'Yes' : 'No'} - ${item.price}</p>
                            <button onClick={() => handleBuy(item)}>Buy</button>
                        </div>
                    ))}
                </div>
            </div>
            {selectedItem && (
                <SellItem
                    item={selectedItem}
                    onConfirmSell={confirmSell}
                    onClose={() => setSelectedItem(null)}
                />
            )}
        </div>
    );
};

export default Sell;
