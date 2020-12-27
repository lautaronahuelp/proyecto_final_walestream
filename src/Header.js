import React from 'react'
import NavBar from './NavBar.js'

class Header extends React.Component {

    

    render(){

        console.log(this.props)

        return(
            <header>
                <h1>Walestream</h1>
                <p>{this.props.saludo}</p>
                <p>{this.props.cantidad}</p>
                <NavBar />
            </header>
        )

    }
}

/*
const Header = (props) => {

    console.log(props)

    return(
        <header>
            <h1>Walestream</h1>
            <NavBar/>
        </header>
    )
}
*/

export default Header