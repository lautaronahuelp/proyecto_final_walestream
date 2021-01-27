import React , { useContext } from 'react'
import CartContext from '../context/CartContext'

const CartItem = ({item}) => {
    const context = useContext(CartContext)
    
    return (
        <li id={item.item.id} className="collection-item avatar">
            <img src={item.item.pictureUrl} alt={item.item.title} className="circle"></img>
            <span className="title">{item.item.title}</span>
            <p>x{item.quantity}</p>
            <p>${item.item.price * item.quantity}</p>
            <button className="secondary-content" onClick={context.removeItem} title="Eliminar del carrito"><i className="material-icons">delete_forever</i></button>
        </li>
    )

}

export default CartItem