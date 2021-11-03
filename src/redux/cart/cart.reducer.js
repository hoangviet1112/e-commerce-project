const INITAL_STATE = {
    hidden: true,
    cartItems: []
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
                cartItems: [...state.cartItems, action.payload]    
            }
            
        default:
            return state
    }
}