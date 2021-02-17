import React , {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

        const [count, setCount] = useState(initial)

        const aumentaCantidad = () => {
            if (compruebaStock()) {
                setCount(count + 1)
            }
        }

        const reduceCantidad = () => {
            if (count > 1) {
                setCount(count - 1)
            }
        }

        const compruebaStock = () => {
            let out
            if (count < stock) {
                out = 1
            } else {
                out = 0
            }

            return out
        }

        const agregarAlCarrito  = () => {
            if(count !== 0) {

                setCount(initial)
                
                onAdd(count)
                
            }
        }



        return (
                <>
                <div className="row">
                   
                    <button className="waves-effect waves-light btn" onClick={ reduceCantidad }><i className="material-icons">exposure_neg_1</i></button>
                    
                    <span>x{count}</span>
                    
                    <button className="waves-effect waves-light btn" onClick={ aumentaCantidad }><i className="material-icons">exposure_plus_1</i></button>
                    
                </div>
                <div className="row">
                    <button className="waves-effect waves-light btn" onClick={ agregarAlCarrito } >Agregar al carrito</button>

                </div>
                </>
            
        )
}

export default ItemCount