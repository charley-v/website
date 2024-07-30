import React, { createContext, useState } from "react";
import all_knifes from '../Components/Assets/all_knifes';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    return {};
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (product, wear, statTrak, displayPrice) => {
        const itemKey = `${product.id}-${wear}-${statTrak ? 'ST' : 'NonST'}`;
        setCartItems(prev => {
            if (prev[itemKey]) {
                return {
                    ...prev,
                    [itemKey]: {
                        ...prev[itemKey],
                        quantity: prev[itemKey].quantity + 1
                    }
                };
            } else {
                return {
                    ...prev,
                    [itemKey]: {
                        id: product.id,
                        name: product.name,
                        wear,
                        statTrak,
                        price: parseFloat(displayPrice), // Ensure price is parsed correctly as a float
                        quantity: 1,
                        image: product.image
                    }
                };
            }
        });
    };
    

    const removeFromCart = (itemKey) => {
        setCartItems(prevItems => {
            const updatedItems = { ...prevItems };
            if (updatedItems[itemKey].quantity > 1) {
                updatedItems[itemKey].quantity -= 1;
            } else {
                delete updatedItems[itemKey];
            }
            return updatedItems;
        });
    };

    const getTotalCartAmount = () => {
        return Object.values(cartItems).reduce((total, item) => {
            return total + (item.quantity * item.price);
        }, 0);
    };

    const getTotalCartItems = () => {
        return Object.values(cartItems).reduce((total, item) => {
            return total + item.quantity;
        }, 0);
    };

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_knifes,
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
