import { React } from 'react'
import { useDispatch } from 'react-redux'

const NeedToBuy = ({ wishList, cart }) => {
    const dispatch = useDispatch()

    const addToCart = (product, index) => {
        wishList.splice(index, 1)
        cart = [...cart, product];

        dispatch({
            type: 'ADD_TO_CART',
            payload: cart
        })

        dispatch({
            type: 'ADD_TO_WISHLIST',
            payload: wishList
        })
    }

    return <div className="side">
        <h3>Need To Buy </h3>
        <div> {wishList.map((element, index) => {
            return <li
                    key="{element.id}"> {element.item} 
                    <button onClick={() => addToCart(element)}>add to cart</button>
                </li>
            })}
        </div>
    </div>
}

export default NeedToBuy