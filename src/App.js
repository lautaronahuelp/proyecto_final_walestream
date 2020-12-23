import React from "react"
import NavBar from './components/NavBar.js'
//const App = <p>Hola Mundo en modulo</p>

function App() {

    //return "Hola Mundo"

    return(
        <>
         <header>
             <h1>Walestream</h1>
             <NavBar/>
         </header>
         <footer>
             <p>&copy; Copyright 2020</p>
         </footer>
         </>
    )
}

//lo que pasa en el archivo queda en el archivo. si alguien importa este archivo, obtiene la exportacion App.
export default App

//CommonJS
//module.exports = App