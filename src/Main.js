import React from 'react'
import ItemListContainer from './ItemListContainer'

const Main = () => {
    return(
        <main className="container">
             <ItemListContainer eventosProximos="No hay eventos programados."/>
             
        </main>
    )
}

export default Main