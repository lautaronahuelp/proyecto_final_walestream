//LA FOMRA VIEJA CommonJS
//const React = require('react')
//const ReactDOM = require('react-dom')

//const App = require('./App')

//LA FORMA NUEVA ES6
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

//JSX
//const Componente = <p>Hola Mundo</p>

//App()
//<App/>
//<App></App>

ReactDOM.render(<App/>,document.getElementById("root"))
