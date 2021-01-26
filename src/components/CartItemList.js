import React from 'react'
import CartItem from './CartItem'

const CartItemList = ({ context }) => {

    return (
        <>
            <div>
                <h2>Tu carrito</h2>
            </div>
            <ul className="collection">
                {context.cart.map(item => {

                    return(
                        <CartItem key={item.item.id} item={item}/>
                    )
                    
                })}
            </ul>
            <h3>Total: ${context.totalProductos().price}</h3>
        </>
    )
}

export default CartItemList