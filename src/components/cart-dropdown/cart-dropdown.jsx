import "./cart-dropdown.scss"
import { useSelector, useDispatch } from "react-redux"
import React from "react"
import CustomButton from "../custom-button/custom-button"
import CartItem from "../cart-item/cart-item"
import { selectCartItems } from "../../redux/cart/cart.selectors"
import { withRouter } from "react-router"
import { toggleCartHidden } from "../../redux/cart/cart.action"

const CartDropdown = ({history}) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const selectedCartItems = selectCartItems(state)
    const cartItems = selectedCartItems
    
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            {   
                cartItems.length ?
                (cartItems.map(cartItem => <CartItem name={cartItem.name} imageUrl={cartItem.imageUrl} quantity={cartItem.quantity} price={cartItem.price}  key={cartItem.id} item={cartItem}/>))
                :
                (<span className="empty-message">Your cart is empty</span>)
            }
            <CustomButton onClick={() => 
            {history.push("/checkout");
            dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
            </div>    
        </div>
    )
}

export default withRouter(CartDropdown)
