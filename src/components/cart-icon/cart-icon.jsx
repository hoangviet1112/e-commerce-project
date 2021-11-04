import "../cart-icon/cart-icon.scss"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"

import React from 'react'
import { toggleCartHidden } from "../../redux/cart/cart.action"
import { useDispatch, useSelector } from "react-redux"
import { selectCartItemsCount } from "../../redux/cart/cart.selectors"

const CartIcon = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const itemCount = selectCartItemsCount(state)
    
    return (
        <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>   
        </div>
    )
}

export default CartIcon
