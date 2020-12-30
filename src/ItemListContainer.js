import React from 'react'

const ItemListContainer = function(props){

    return(
        <div>
            <h2>Próximos eventos</h2>
            <p>Conoce nuestros próximos eventos y compra tickets para tus preferidos.</p>
            <p>{props.eventosProximos}</p>
        </div>
        
    )
}

export default ItemListContainer