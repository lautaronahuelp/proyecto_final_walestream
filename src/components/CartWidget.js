import React , { useContext , useEffect , useState } from 'react'
import { NavLink } from 'react-router-dom'
import CartContext from '../context/CartContext'


const CartWidget = function(){
    const contexto = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0)
    
    
    useEffect(() => {
        contexto.levantarCart()
        setCantidad(contexto.totalProductos().quantity)
    },[setCantidad, cantidad, contexto])
    

    return(
        cantidad ?
        <li>
            <span className="badge blue" data-badge-caption="">{ cantidad }</span>
            <NavLink to="/cart"><i id="cartWidget" className="material-icons">shop</i></NavLink>
        </li> : ""
    )
}

export default CartWidget