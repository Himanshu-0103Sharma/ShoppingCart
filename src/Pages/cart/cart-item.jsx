import React, { useContext, useState } from 'react'
import './cart.css'
import { ShopContext } from '../../context/shop-context';


export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCart} = useContext(ShopContext);





    return (
        <>
        <div className="item">
            <img src = {productImage}/>
            <div className="description">
                <p><b>{productName}</b></p>
                <p>{price} Rupees</p>
                <div className="cart-buttons">
                    <button onClick = {() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange = {(e) => updateCart(Number(e.target.value), id)}/>
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>

        </div>
        </>
    )
}