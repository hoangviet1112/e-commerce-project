import { addItemToCart, removeItemToCart } from "./cart.utils"

const INITAL_STATE = {
    hidden: true,
    cartItems: [],

}

export const cartReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case "TOGGLE_CART_HIDDEN":
            return {
                ...state,
                hidden: !state.hidden
            }    
        
        case "ADD_ITEM":
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)    
            }

        case "REMOVE_ITEM":
            return {
                ...state,
                cartItems: removeItemToCart(state.cartItems, action.payload)
            }

        case "CLEAR_ITEM_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
            
        default:
            return state
    }
}