import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';
import closebutton from '../Assets/closebutton.png';

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedWear, setSelectedWear] = useState('Field Tested');
  const [isStatTrak, setIsStatTrak] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(product.knife_price);
  const [priceDifference, setPriceDifference] = useState(0);
  const [stattrakPriceDifference, setStatTrakPriceDifference] = useState(0);

  useEffect(() => {
    updatePrice(selectedWear, isStatTrak);
  }, [selectedWear, isStatTrak]); // Ensure price is updated when either state changes

  const handleWearChange = (wear) => {
    setSelectedWear(wear);
  };

  const handleStatTrakToggle = (value) => {
    setIsStatTrak(value);
  };

  const updatePrice = (wear, statTrak) => {
    let wearModifier = getWearModifier(wear);
    let basePrice = product.knife_price;
    let newPrice = basePrice * wearModifier;

    if (statTrak) {
      newPrice *= 1.10; // Increase price by 10% for StatTrak
      setStatTrakPriceDifference((newPrice - basePrice * wearModifier).toFixed(2));
    } else {
      setStatTrakPriceDifference(0);
    }

    setPriceDifference((basePrice * wearModifier - basePrice).toFixed(2));
    setDisplayPrice(newPrice.toFixed(2));
  };

  const getWearModifier = (wear) => {
    switch(wear) {
      case 'Factory New': return 1.20;
      case 'Minimal Wear': return 1.10;
      case 'Field Tested': return 1.00;
      case 'Well-Worn': return 0.95;
      case 'Battle-Scarred': return 0.90;
      default: return 1.00;
    }
  };

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img">
          <img className="product-display-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <div className="product-header">
          <h1>{product.name}</h1>
          <Link to="/knives" className="close-button">
            <img src={closebutton} width="30" height="30" alt="" />
          </Link>
        </div>
        <div className="product-price">${displayPrice}</div>
        <div className="product-description">
          <h2>Description</h2>
          <p>{product.description}</p>
          <p><strong>Wear:</strong> {selectedWear} ({priceDifference >= 0 ? `+${priceDifference}` : priceDifference})</p>
          <p><strong>StatTrak:</strong> {isStatTrak ? `Yes (+${stattrakPriceDifference})` : 'No'}</p>
        </div>
        <div className="product-wear">
          <h2>Select Wear</h2>
          <div className="wear-options">
            {['Factory New', 'Minimal Wear', 'Field Tested', 'Well-Worn', 'Battle-Scarred'].map(wear => (
              <button
                key={wear}
                className={`wear-option ${selectedWear === wear ? 'selected' : ''}`}
                onClick={() => handleWearChange(wear)}
              >
                {wear}
              </button>
            ))}
          </div>
        </div>
        <div className="product-stattrak">
          <h2>StatTrak:</h2>
          <button
            className={`stattrak-option ${isStatTrak ? 'selected' : ''}`}
            onClick={() => handleStatTrakToggle(true)}
          >
            Yes
          </button>
          <button
            className={`stattrak-option ${!isStatTrak ? 'selected' : ''}`}
            onClick={() => handleStatTrakToggle(false)}
          >
            No
          </button>
        </div>
        <button className="add-to-cart" onClick={() => addToCart(product, selectedWear, isStatTrak, displayPrice)}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
