import "../checkout/CheckoutPage.scss"

import React from 'react'
import { useSelector } from "react-redux"
import { selectCartItems, selectCartToTal } from "../../redux/cart/cart.selectors"
import CheckoutItem from "../../components/checkout-item/CheckoutItem"

const CheckoutPage = () => {
    const state = useSelector(state => state)
    const cartItems = selectCartItems(state)
    const total = selectCartToTal(state)
    console.log(cartItems);
    
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header--block">
                    <span>Product</span>
                </div>
                <div className="header--block">
                    <span>Description</span>
                </div>
                <div className="header--block">
                    <span>Quantity</span>
                </div>
                <div className="header--block">
                    <span>Price</span>
                </div>
                <div className="header--block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => {
                    return <CheckoutItem cartItem={cartItem} key={cartItem.id} imageUrl={cartItem.imageUrl} name={cartItem.name} quantity={cartItem.quantity} price={cartItem.price}/>
                })
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    )
}

export default CheckoutPage
