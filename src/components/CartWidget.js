import React from 'react'
import { NavLink } from 'react-router-dom'


const CartWidget = function({ quantity }){

    return(
        <li>
            <span className="badge blue" data-badge-caption="">{ quantity }</span>
            <NavLink to="/cart"><i id="cartWidget" className="material-icons">shop</i></NavLink>
        </li>
    )
}

export default CartWidget