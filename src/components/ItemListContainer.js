import React from 'react'

import ItemList from './ItemList';

const ItemListContainer = function(props){

    return(
        <div>
            <h2>Próximos eventos</h2>
            <p>Conoce nuestros próximos eventos y compra tickets para tus preferidos.</p>
            <p>{props.eventosProximos}</p>
            <ItemList items={[
                    {id:1, title: "evento 1", description:"descripcion del evento uno", price:500, pictureUrl:"https://i.pinimg.com/originals/7c/06/8b/7c068be74941226b80161e8cc8dafa01.jpg"},
                    {id:2, title: "evento 2", description:"descripcion del evento dos", price:500, pictureUrl:"https://i.pinimg.com/originals/7c/06/8b/7c068be74941226b80161e8cc8dafa01.jpg"},
                    {id:3, title: "evento 3", description:"descripcion del evento tres", price:500, pictureUrl:"https://i.pinimg.com/originals/7c/06/8b/7c068be74941226b80161e8cc8dafa01.jpg"},
                    {id:4, title: "evento 4", description:"descripcion del evento cuatro", price:500, pictureUrl:"https://i.pinimg.com/originals/7c/06/8b/7c068be74941226b80161e8cc8dafa01.jpg"}]}/>
        </div>
        
    )
}

export default ItemListContainer