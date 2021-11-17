import "../checkout-item/CheckoutItem.scss"

import React from 'react'
import { removeItem, addItem, clearItemFromCart } from "../../redux/cart/cart.action"
import { useDispatch } from "react-redux"


const CheckoutItem = (props) => {
    const dispatch = useDispatch()
    function clearItem(item) {
        dispatch(clearItemFromCart(item))
    }
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={props.imageUrl} alt="item" />    
            </div>
            <span className="name">{props.name}</span>
            <span className="quantity">
                <div onClick={() => {dispatch(removeItem(props.cartItem))}} className="arrow">&#10094;</div>
                    <span className="value">{props.quantity}</span>
                <div onClick={() => {dispatch(addItem(props.cartItem))}} className="arrow">&#10095;</div>
            </span>
            <span className="price">{props.price}</span>
            <div className="remove-button" onClick={() => {
                clearItem(props.cartItem);
                }}>
                &#10005;    
            </div>
        </div>
    )
}

export default CheckoutItem
