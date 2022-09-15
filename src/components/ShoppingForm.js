import { React, useState } from 'react'

const ShoppingForm = ({ addToCart }) => {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addToCart({ id: Math.floor(Math.random() * 100), item: input })
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