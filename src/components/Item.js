import React from 'react'


const Item = ({id, title, description, price, pictureUrl}) => {
    return (
          <div  id={id} className="col s12 m3">
            <div className="card small">
              <div className="card-image">
                <img src={pictureUrl} alt={title} width="300"></img>
                <span className="card-title">{title}</span>
              </div>
              <div className="card-content">
                <p>{description}</p>
                <p>${price}</p>
               
              </div>
             
            </div>
          </div>
        
    )
}

export default Item
