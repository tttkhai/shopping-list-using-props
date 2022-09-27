import { React, useState } from 'react'
import { useDispatch } from 'react-redux'

const ShoppingForm = ({cart}) => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_TO_CART',
            payload: [{ id: Math.floor(Math.random() * 100), item: input }, ...cart]
        })

        setInput('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    name="shoppingForm"
                    type="text"
                    value={input}
                    onChange={handleChange}
                />
                <button> submit </button>
            </form>
        </>
    )

}

export default ShoppingForm