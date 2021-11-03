import "../cart-icon/cart-icon.scss"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"

import React from 'react'
import { toggleCartHidden } from "../../redux/cart/cart.action"
import { useDispatch } from "react-redux"

const CartIcon = () => {
    const dispatch = useDispatch()
    return (
        <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>   
        </div>
    )
}

export default CartIcon
