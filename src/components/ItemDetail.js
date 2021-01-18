import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({id, title, description, price, pictureUrl}) => {

    const [cantidad, setCantidad] = useState(0)

    const onAdd = (quantityToAdd) => {

        setCantidad(quantityToAdd)
        console.log(`se agregaron al carrito ${quantityToAdd} unidades`)

    }

    return (
        <div id={id}>
            <h3>{title}</h3>
            <img src={pictureUrl} alt={title}></img>
            <p>{description}</p>
            <p>${price}</p>
            { cantidad === 0 ? <ItemCount stock={20} initial={1} onAdd={onAdd} /> : <Link to="/cart"><button className="waves-effect waves-light btn-small">Terminar compra</button></Link>

            }
            
        </div>
    )
}

export default ItemDetail