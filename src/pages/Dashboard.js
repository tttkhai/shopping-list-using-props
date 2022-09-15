import { React, useEffect, useState } from "react"
import InMyCart from "../components/InMyCart"
import NeedToBuy from "../components/NeedToBuy"
import ShoppingForm from "../components/ShoppingForm"
import _ from 'lodash'

const Dashboard = () => {
    const [inMyCartItem, setInMyCartItem] = useState([])
    const [wishListItem, setWishListItem] = useState([])
    const [selectedItem, setSelectedItem] = useState({})
    useEffect(() => {
        selectItem()
    }, [])

    const addToCart = (item) => {
        const isInCart = inMyCartItem.find(el => item.item === el.item)
        const isInWishList = wishListItem.find(el => item.item === el.item)


        if (isInCart || isInWishList) {
            alert("item is already in cart")
            return
        }

        setInMyCartItem([item, ...inMyCartItem])
    }

    const selectItem = (item) => {
        if (item) {
            setSelectedItem(item)
        }
    }

    const removeFromCart = (item) => {
        if (!_.isEmpty(item)) {
            setWishListItem([item, ...wishListItem])
            setSelectedItem({})
            setInMyCartItem(inMyCartItem.filter((element) => item.id !== element.id))
        }
    }

    const removeFromWishlist = (item) => {
        if (!_.isEmpty(item)) {
            setInMyCartItem([item, ...inMyCartItem])
            setSelectedItem({})
            setWishListItem(wishListItem.filter((element) => item.id !== element.id))
        }
    }

    return (
        <>
            <h1> Shopping List </h1>
            <ShoppingForm addToCart={addToCart} />
            <div className="myApp">
                <InMyCart inMyCartItem={inMyCartItem} selectItem={selectItem} selectedItem={selectedItem} />
                <div className="transfer">
                    <button className="transferButton" onClick={() => removeFromCart(selectedItem)}>
                        transfer from cart to wishlist
                    </button>
                    <button className="transferButton" onClick={() => removeFromWishlist(selectedItem)} >
                        transfer from wishlist to cart
                    </button>
                </div>
                <NeedToBuy wishListItem={wishListItem} selectItem={selectItem} selectedItem={selectedItem} />
            </div>
        </>
    )
}

export default Dashboard
