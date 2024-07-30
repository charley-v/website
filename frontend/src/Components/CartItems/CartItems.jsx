import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import removeicon from '../Assets/removeicon.png';
import { useUser } from '../../Context/UserContext';

export const CartItems = () => {
    const { getTotalCartAmount, cartItems, removeFromCart, addToCart } = useContext(ShopContext);
    const { user } = useUser();
    const navigate = useNavigate();
    const totalAmount = getTotalCartAmount();
    const fee = totalAmount * 0.05;

    const handleCheckout = () => {
        if (user) {
            navigate('/checkout');
        } else {
            alert("Please log in to proceed");
            navigate('/login');
        }
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Shopping Cart</h1>
            <div className="cart-content">
                <div className="cart-items">
                    {Object.values(cartItems).map(item => (
                        <div key={`${item.id}-${item.wear}-${item.statTrak ? 'ST' : 'NonST'}`} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h2 className="cart-item-title">{`${item.name} - ${item.wear} ${item.statTrak ? '+ StatTrak' : ''}`}</h2>
                                <p className="cart-item-price">${item.price.toFixed(2)}</p>

                            </div>
                            <div className="cart-item-total">
                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                                <button className="remove-btn" onClick={() => removeFromCart(`${item.id}-${item.wear}-${item.statTrak ? 'ST' : 'NonST'}`)}>
                                    <img src={removeicon} alt="Remove" style={{ height: 20, width: 20 }} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <h2>Summary</h2>
                    <div className="summary-item">
                        <p>Subtotal</p>
                        <p>${totalAmount.toFixed(2)}</p>
                    </div>
                    <div className="summary-item">
                        <p>KnifeX Fee (5%)</p>
                        <p>${fee.toFixed(2)}</p>
                    </div>
                    <div className="summary-item total">
                        <p>Total</p>
                        <p>${(totalAmount + fee).toFixed(2)}</p>
                    </div>
                    {totalAmount > 0 ? (
                        <button onClick={handleCheckout} className="checkout-btn">Proceed to Checkout</button>
                    ) : (
                        <button className="checkout-btn" disabled>Proceed to Checkout</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartItems;
