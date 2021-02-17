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
            <div className='row'>
                <div className="col s10">
                    <h2>Tu carrito está vacío.</h2>
                </div>
            </div>
            <div className='row'>
                <div className="col s10">
                    <Link to="/"><button className="waves-effect waves-light btn-small">Volver a comprar</button></Link>
                </div>
            </div>
        </>}
        <CheckOut compra={context.cart} total={context.totalProductos().price}/>
        </>
    )
}

export default Cart
