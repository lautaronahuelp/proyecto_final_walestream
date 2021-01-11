import React from 'react'

const ItemDetail = ({id, title, description, price, pictureUrl}) => {
    return (
        <div id={id}>
            <h3>{title}</h3>
            <img src={pictureUrl} alt={title}></img>
            <p>{description}</p>
            <p>${price}</p>
        </div>
    )
}

export default ItemDetail