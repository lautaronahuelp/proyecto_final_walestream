import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'
/**/
import CategoriesList from './CategoriesList'

const NavBar = () => {
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
                                    <a className="dropdown-trigger" href="#!" data-target="dropdown_eventos">Eventos<i className="material-icons right">arrow_drop_down</i></a>
                                </li>
                                <CartWidget />
                            </ul>
                        </div>
                    </div>
             
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a className="dropdown-trigger" href="#!" data-target="dropdown_eventos_side">Eventos<i className="material-icons right">arrow_drop_down</i></a></li>
                    <CartWidget />
                </ul>
                <ul id="dropdown_eventos" className="dropdown-content">
                    <CategoriesList />
                </ul>
                <ul id="dropdown_eventos_side" className="dropdown-content">
                    <CategoriesList />
                </ul>
            </>
        )
}

export default NavBar