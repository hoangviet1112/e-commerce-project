import "../cart-dropdown/cart-dropdown.scss"

import React from 'react'
import CustomButton from "../../custom-button/custom-button"

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>    
        </div>
    )
}

export default CartDropdown
