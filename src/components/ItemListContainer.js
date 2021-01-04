import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = function(props){

    return(
        <div>
            <h2>Próximos eventos</h2>
            <p>Conoce nuestros próximos eventos y compra tickets para tus preferidos.</p>
            <p>{props.eventosProximos}</p>
            <div>
                <h4>EVENTO 1</h4>
                <ItemCount />
            </div>
        </div>
        
    )
}

export default ItemListContainer