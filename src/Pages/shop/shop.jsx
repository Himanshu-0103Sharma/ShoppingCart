import React from 'react'
import {PRODUCTS} from '../../product';
import {Product} from './product';
import './shop.css'

export const Shop = () => {
    return (
        <>
        <h1 className="header">Shopping Cart</h1>
        <div className="products">
            {PRODUCTS.map(product => {
                return <Product key={product.id} data={product} />
            })}
        </div>
        </>
    )
}