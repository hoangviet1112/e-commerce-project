import "../checkout-item/CheckoutItem.scss"

import React from 'react'
import { removeItemFromCart } from "../../redux/cart/cart.action"
import { useDispatch } from "react-redux"

const CheckoutItem = (props) => {
    const dispatch = useDispatch()
    function clearItem(item) {
        dispatch(removeItemFromCart(item))
    }
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={props.imageUrl} alt="item" />    
            </div>
            <span className="name">{props.name}</span>
            <span className="quantity">{props.quantity}</span>
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
