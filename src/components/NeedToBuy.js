import { React } from 'react'
import { useDispatch } from 'react-redux'

const NeedToBuy = ({ wishList, cart }) => {
    const dispatch = useDispatch()

    const addToCart = (product, index) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: [...cart, product]
        })

        dispatch({
            type: 'ADD_TO_WISHLIST',
            payload: wishList.splice(index, 1)
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