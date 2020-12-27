import React from 'react'

//clase, como una funcion pero con metodos de ciclo de vida PARA MI ESTA MAS COPADA QUE LA FUNCION.
class NavBar extends React.Component {

    render() {
        return (
            <nav>
                <ul>
                    <li><a href="/">Mi perfil</a></li>
                    <li><a href="/">Mis tickets</a></li>
                    <li><a href="/">Cerrar sesión</a></li>
                </ul>
            </nav>
        )
    }
}
/*
function NavBar() {

    return (
        <nav>
            <ul>
                <li><a href="/">Mi perfil</a></li>
                <li><a href="/">Mis tickets</a></li>
                <li><a href="/">Cerrar sesión</a></li>
            </ul>
        </nav>
    )
}
*/
export default NavBar