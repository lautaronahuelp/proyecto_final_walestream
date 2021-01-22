import React , {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

        const [count, setCount] = useState(initial)

        const aumentaCantidad = () => {
            if (compruebaStock) {
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
                console.log('Hay stock')
            } else {
                console.log('No hay mas stock')
                out = 0
            }

            return out
        }

        const agregarAlCarrito  = () => {
            if(count !== 0) {

                setCount(initial)
                
                onAdd(count)
                
            } else {
                console.log('Seleccina productos para agregar al carrito')
        }}



        return (
            <div>
                <div className="row">
                    <button className="waves-effect waves-light btn-small" onClick={ reduceCantidad }>-</button>
                    <span>{count}</span>
                    <button className="waves-effect waves-light btn-small" onClick={ aumentaCantidad }>+</button>
                </div>
                <div>
                    <button className="waves-effect waves-light btn-small" onClick={ compruebaStock ? agregarAlCarrito : console.log('Selecciona productos para agregar al carrito') } >Agregar al carrito</button>
                </div>
            </div>
        )
}

export default ItemCount