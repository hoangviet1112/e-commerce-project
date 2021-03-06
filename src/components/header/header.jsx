import React from 'react'
import "../header/header.scss"
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from "../../assets/crown.svg"
import { auth } from '../../firebase-config'
import { useSelector } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'


const Header = () => {
    const state = useSelector(state => state)
    const currentUser = selectCurrentUser(state)
    const hidden = selectCartHidden(state)
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />    
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {currentUser ? 
                    (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                    :
                    (<Link className="option" to="/signin">SIGN IN</Link>)
                }
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}    
        </div>
    )
}

export default Header
