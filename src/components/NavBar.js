import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
        return (
            <>
            <ul id="dropdown_eventos" className="dropdown-content">
                <li><a href="#!">Recitales</a></li>
                <li><a href="#!">Obras</a></li>
                <li><a href="#!">Conferencias</a></li>
            </ul>
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo left">Walestream</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Mi perfil</a></li>
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown_eventos">Eventos<i className="material-icons right">arrow_drop_down</i></a></li>
                        <li><a href="/"><CartWidget /></a></li>
                        <li><a href="/">Cerrar sesión</a></li>
                    
                </ul>
                </div>
            </nav>
            </>
        )
}

export default NavBar