import React from 'react'
import ItemCount from './ItemCount'

const Item = ({id, title, description, price, pictureUrl}) => {
    return (
        <div id={id} className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src={pictureUrl} alt={title} className="responsive-img"></img>
          <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
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
        {/*<div className="card-action">
        <a href="#!">This is a link</a>
    </div>*/}
      </div>
    </div>
  </div>
        
    )
}

export default Item
