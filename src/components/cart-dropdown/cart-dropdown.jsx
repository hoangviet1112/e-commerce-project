import "./cart-dropdown.scss"
import { useSelector } from "react-redux"
import React from "react"
import CustomButton from "../custom-button/custom-button"
import CartItem from "../cart-item/cart-item"
import { selectCartItems } from "../../redux/cart/cart.selectors"

const CartDropdown = () => {
    const state = useSelector(state => state)
    const selectedCartItems = selectCartItems(state)
    const cartItems = selectedCartItems
    
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem name={cartItem.name} imageUrl={cartItem.imageUrl} quantity={cartItem.quantity} price={cartItem.price}  key={cartItem.id} item={cartItem}/>)
            }
            <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>    
        </div>
    )
}

export default CartDropdown
