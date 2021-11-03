import "../cart-icon/cart-icon.scss"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"

import React from 'react'
import { toggleCartHidden } from "../../redux/cart/cart.action"
import { useDispatch, useSelector } from "react-redux"

const CartIcon = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const itemCount = cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
    
    return (
        <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>   
        </div>
    )
}

export default CartIcon
