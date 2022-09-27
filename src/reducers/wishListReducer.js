const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'

export const wishListReducer = (state=[], action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return action.payload
        default:
            return state
    }
}