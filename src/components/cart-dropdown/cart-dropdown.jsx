import "./cart-dropdown.scss"
import { useSelector } from "react-redux"
import React from "react"
import CustomButton from "../custom-button/custom-button"
import CartItem from "../cart-item/cart-item"

const CartDropdown = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    
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
