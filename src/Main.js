import React from 'react'
import ItemListContainer from './components/ItemListContainer'

const Main = () => {
    return(
        <main className="container">
             <ItemListContainer eventosProximos="Los siguientes eventos estan disponibles para compra de entradas:"/>
             
        </main>
    )
}

export default Main