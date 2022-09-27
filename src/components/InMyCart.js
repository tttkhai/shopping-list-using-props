import { React } from 'react'
import { useDispatch } from 'react-redux'

const InMyCart = ({ wishList, cart }) => {
    const dispatch = useDispatch()

    const addToWishList = (product, index) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: cart.splice(index,1)
        })

        dispatch({
            type: 'ADD_TO_WISHLIST',
            payload: [...wishList, product]
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