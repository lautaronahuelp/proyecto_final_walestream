import React from 'react'
import CartWidget from './CartWidget'

//clase, como una funcion pero con metodos de ciclo de vida PARA MI ESTA MAS COPADA QUE LA FUNCION.
const NavBar = () => {
        return (
            <nav className="nav-wrapper">
                <a href="/" className="brand-logo left">Walestream</a>
                <ul className="right">
                    <li><a href="/">Mi perfil</a></li>
                    <li><a href="/"><CartWidget /></a></li>
                    <li><a href="/">Cerrar sesión</a></li>
                    
                </ul>
            </nav>
        )
}

export default NavBar