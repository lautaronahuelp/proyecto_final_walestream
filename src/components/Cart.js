import React , { useContext } from 'react'
import {Link} from 'react-router-dom'
import CartItemList from './CartItemList'
import CartContext from '../context/CartContext'
import CheckOut from './CheckOut'

const Cart = () => {
    const context = useContext(CartContext)
    const carrito = context.cart

    return (
        <>
        {carrito.length > 0 ? <><CartItemList context={context}/></> :
        <>
            <h2>Tu carrito está vacío.</h2>
            <Link to="/"><button className="waves-effect waves-light btn-small">Ir a comprar</button></Link>
        </>}
        <CheckOut compra={context.cart} total={context.totalProductos().price}/>
        </>
    )
}

export default Cart
