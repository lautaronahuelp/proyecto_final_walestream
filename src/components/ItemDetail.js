import React , { useState , useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import CartContext from '../context/CartContext'

const ItemDetail = ({id, title, description, price, stock, pictureUrl}) => {

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

    

    }




    return (

        <div className="col s12">
        <h2 className="header">{title}</h2>
        <div className="card horizontal">
          <div className="card-image">
          <img src={pictureUrl} alt={title}></img>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{description}</p>
              
            </div>
            <div className="card-action">
            <p>${price}</p>
              { cantidad === 0 ? <ItemCount stock={stock} initial={1} onAdd={onAdd} /> : <Link to="/cart"><button className="waves-effect waves-light btn-small">Terminar compra</button></Link>}
            </div>
          </div>
        </div>
      </div>
    )
}

export default ItemDetail