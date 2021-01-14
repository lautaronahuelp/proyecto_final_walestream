import React from 'react'


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
