import React , { useState , useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import CartContext from '../CartContext'

const ItemDetail = ({id, title, description, price, pictureUrl}) => {

    const contexto = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)

    const onAdd = (quantityToAdd) => {
        const itemObjetado = {
            'id' : id,
            'title' : title,
            'price' : price,
            'pictureUrl' : pictureUrl
        
        }

        setCantidad(quantityToAdd)

        contexto.addItem(itemObjetado, quantityToAdd)

        console.log(`se agregaron al carritso ${quantityToAdd} unidades`)
    

    }
    console.log('carrito contextual:')
    console.log(contexto.cart)



    return (
        <div id={id}>
            <h3>{title}</h3>
            <img src={pictureUrl} alt={title}></img>
            <p>{description}</p>
            <p>${price}</p>
            { cantidad === 0 ? <ItemCount stock={20} initial={1} onAdd={onAdd} /> : <Link to="/cart"><button className="waves-effect waves-light btn-small">Terminar compra</button></Link>}
        </div>
    )
}

export default ItemDetail