const ADD_TO_CART = 'ADD_TO_CART'

export const cartReducer = (state=[], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return action.payload
        default:
            return state
    }
}