import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = function(props){

    return(
        <div>
            <h2>Próximos eventos</h2>
            <p>Conoce nuestros próximos eventos y compra tickets para tus preferidos.</p>
            <p>{props.eventosProximos}</p>
            <div>
                <h4>EVENTO 1</h4>
                <ItemCount stock={20} initial={1} onAdd={(count, initial, setCount) => {
                    if(count !== 0) {

                        setCount(initial)

                        console.log(`se agregaron al carrito ${count} unidades`)
                    } else {
                        console.log('Seleccina productos para agregar al carrito')
                }}} />
            </div>
        </div>
        
    )
}

export default ItemListContainer