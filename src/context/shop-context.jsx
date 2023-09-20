import React, { createContext, useState } from 'react';
import {PRODUCTS} from '../product';

export const ShopContext = createContext(null);


const getDefaultCart = () => {
    let cart = {};
    for(let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}




export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] + 1 }));
    };


    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] - 1 }));
    };

    const getTotalPrice = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0){
                let iteminfo = PRODUCTS.find(product => product.id === Number(item));
                totalAmount += cartItems[item] * iteminfo.price;
            }
        }
        return totalAmount;
    };


    const updateCart = (newAmount, itemID) => {
        setCartItems(prev => ({...prev, [itemID]: newAmount}))
    }



    const contextValue = {cartItems, addToCart, removeFromCart, getTotalPrice, updateCart};
    return (<ShopContext.Provider value = {contextValue}>{props.children}</ShopContext.Provider>);
}