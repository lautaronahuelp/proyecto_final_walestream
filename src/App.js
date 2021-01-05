import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import './estilos.css'
//const App = <p>Hola Mundo en modulo</p>

function App() {

    //JS MATERIALIZE
    

    return(
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

//lo que pasa en el archivo queda en el archivo. si alguien importa este archivo, obtiene la exportacion App.
export default App

//CommonJS
//module.exports = App