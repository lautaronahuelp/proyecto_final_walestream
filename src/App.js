import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
//const App = <p>Hola Mundo en modulo</p>

function App() {

    //return "Hola Mundo"

    return(
        <>
            <Header saludo="Hola k ase?" cantidad="2"/>
            <Main funcion={() => {console.log('clicaste wey props')}}/>
            <Footer />
        </>
    )
}

//lo que pasa en el archivo queda en el archivo. si alguien importa este archivo, obtiene la exportacion App.
export default App

//CommonJS
//module.exports = App