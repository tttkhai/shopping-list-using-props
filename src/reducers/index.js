import { cartReducer } from "./cartReducer"
import { wishListReducer } from "./wishListReducer"
import { combineReducers } from "redux"
export const rootReducer = combineReducers({
    wishList: wishListReducer,
    cart: cartReducer,
})