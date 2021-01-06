import React from 'react'

import ItemList from './ItemList';

const ItemListContainer = function(props){

    return(
        <div>
            <h2>Próximos eventos</h2>
            <p>Conoce nuestros próximos eventos y compra tickets para tus preferidos.</p>
            <p>{props.eventosProximos}</p>
            <ItemList />
        </div>
        
    )
}

export default ItemListContainer