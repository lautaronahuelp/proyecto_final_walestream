import React from 'react'

import ItemList from './ItemList';
import {useParams } from 'react-router-dom'

const ItemListContainer = function(){

    const { id } = useParams()

    return(
        <div>
            <h2>Próximos eventos</h2>
            <p>Conoce nuestros próximos eventos y compra tickets para tus preferidos.</p>
            <ItemList catId={id}/>
        </div>
        
    )
}

export default ItemListContainer