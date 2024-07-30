import React from 'react';
import './Marketplace.css';
import karambitDoppler from './Karambit/karambit-Doppler.png';
import m9bayonetLore from './M9Bayonet/m9bayonet-Lore.png';
import butterflyFade from './ButterflyKnife/butterfly-Fade.png';
import ursusknifecrimsonweb from './Ursus Knife/UrsusKnife-crimsonweb.png'
import falchionbluesteel from './FalchionKnife/falchion-blue steel.png';



const offers = [
    { id: 101, name: "Karambit | Doppler", wear: "Factory New", statTrak: true, price: 450, image: karambitDoppler },
    { id: 102, name: "M9 Bayonet | Lore", wear: "Field Tested", statTrak: false, price: 330, image: m9bayonetLore },
    { id: 103, name: "Butterfly Knife | Fade", wear: "Minimal Wear", statTrak: true, price: 700, image: butterflyFade },
    { id: 104, name: "Ursus Knife | Crimson Web", wear: "Well-Worn", statTrak: false, price: 250, image: ursusknifecrimsonweb},
    { id: 105, name: "Falchion Knife | Blue Steel", wear: "Battle-Scarred", statTrak: true, price: 200, image: falchionbluesteel }
];

const Marketplace = () => {
    const handleBuy = (item) => {
        // Implement the buy logic here (Note: just for display purposes)
        console.log("Purchased: ", item);
    };

    return (
        <div className="marketplace-container">
            <h1>Marketplace</h1>
            <div className="offers-grid">
                {offers.map((item) => (
                    <div key={item.id} className="offer-item">
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                        <p>Wear: {item.wear}</p>
                        <p>StatTrak: {item.statTrak ? 'Yes' : 'No'}</p>
                        <p>Price: ${item.price}</p>
                        <button onClick={() => handleBuy(item)}>Buy</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marketplace;
