import { React } from 'react'
import { useDispatch } from 'react-redux'

const InMyCart = ({ wishList, cart }) => {
    const dispatch = useDispatch()

    const addToWishList = (product, index) => {
        wishList = [...wishList, product];
        cart.splice(index,1);
        console.log("cart in NeedToBuy "+JSON.stringify(cart));
        console.log("wishList NeedToBuy "+JSON.stringify(wishList));

        dispatch({
            type: 'ADD_TO_CART',
            payload: cart
        })

        dispatch({
            type: 'ADD_TO_WISHLIST',
            payload: wishList
        })
    }

    return (<div className="side">
        <h3>In My Cart </h3>
        <div> {cart.map((element, index) => {
            return <li
                    key={element.id}> {element.item} 
                <button onClick={() => addToWishList(element, index)}>add to wish list</button>
                </li>
            })}
        </div>
    </div>)
}

export default InMyCart