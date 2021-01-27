import React , { useContext , useEffect } from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
import CartContext from '../context/CartContext'

const NavBar = () => {
    const context = useContext(CartContext)
    const quantity = context.totalProductos().quantity
    

    useEffect(() => {
        context.levantarCart()
    }
    )

        return (
            <>
                <nav>
                    <div className="nav-wrapper">
                        <div className="col s12">
                            <NavLink to="/" className="brand-logo">Walestream</NavLink>
                            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                <li>
                                    <a href="#!">Mi perfil</a>
                                </li>
                                <li>
                                    <a className="dropdown-trigger" href="#!" data-target="dropdown_eventos">Eventos<i className="material-icons right">arrow_drop_down</i></a>
                                </li>
                                {quantity ? <CartWidget quantity={quantity}/> : ""}
                                <li>
                                    <a href="#!">Cerrar sesión</a>
                                </li>
                            </ul>
                        </div>
                    </div>
             
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="#!">Mi perfil</a></li>
                    <li><a className="dropdown-trigger" href="#!" data-target="dropdown_eventos_side">Eventos<i className="material-icons right">arrow_drop_down</i></a></li>
                    {quantity ? <CartWidget quantity={quantity}/> : ""}
                    <li><a href="#!">Cerrar sesión</a></li>
                </ul>
                <ul id="dropdown_eventos" className="dropdown-content">
                    <li><NavLink to="/category/recitales">Recitales</NavLink></li>
                    <li><NavLink to="/category/obras">Obras</NavLink></li>
                    <li><NavLink to="/category/conferencias">Conferencias</NavLink></li>
                </ul>
                <ul id="dropdown_eventos_side" className="dropdown-content">
                    <li><NavLink to="/category/recitales">Recitales</NavLink></li>
                    <li><NavLink to="/category/obras">Obras</NavLink></li>
                    <li><NavLink to="/category/conferencias">Conferencias</NavLink></li>
                </ul>
            </>
        )
}

export default NavBar