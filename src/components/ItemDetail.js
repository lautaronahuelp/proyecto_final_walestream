import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({id, title, description, price, pictureUrl}) => {
    return (
        <div id={id}>
            <h3>{title}</h3>
            <img src={pictureUrl} alt={title}></img>
            <p>{description}</p>
            <p>${price}</p>
            <ItemCount stock={20} initial={1} onAdd={(count, initial, setCount) => {
            if(count !== 0) {

                setCount(initial)

                console.log(`se agregaron al carrito ${count} unidades`)
            } else {
                console.log('Seleccina productos para agregar al carrito')
        }}} />
        </div>
    )
}

export default ItemDetail