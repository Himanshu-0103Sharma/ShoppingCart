
import React, { useContext } from 'react'
import { PRODUCTS } from '../../product'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item'
import {useNavigate} from 'react-router-dom'
import './cart.css'
export const Cart = () => {
    const {cartItems,getTotalPrice} = useContext(ShopContext);
    const total = getTotalPrice();
    const navigate = useNavigate();

    return (
        <div className="cartlist">
            <h1>Cart</h1>
            <div className="cart-item">
                {PRODUCTS.map(product => {
                    if(cartItems[product.id] > 0){
                        return <CartItem data={product} />
                    }
                })}
            </div>

            <div className="total">
                <b>Subtotal</b> : {total} Rupees
            </div>
            <div className="buttons">
                <button onClick={() => navigate("/")}>Continue Shopping</button>
                <button>CheckOut</button>
            </div>
        </div>
    )
}