import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {

    return(
        <>
        <div className='row'>
            <div className="col s10">
                <h2>Producto no encontrado.</h2>
            </div>
        </div>
        <div className='row'>
            <div className="col s10">
                <Link to="/"><button className="waves-effect waves-light btn-small">Volver a comprar</button></Link>
            </div>
        </div>
        </>
    )
}

export default NotFound