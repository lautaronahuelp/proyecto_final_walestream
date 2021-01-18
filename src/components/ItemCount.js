import React , {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

        const [count, setCount] = useState(initial)

        function aumentaCantidad () {
            if (compruebaStock) {
                setCount(count + 1)
            }
        }

        function reduceCantidad () {
            if (count > 1) {
                setCount(count - 1)
            }
        }

        function compruebaStock() {
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



        return (
            <div>
                <button className="waves-effect waves-light btn-small" onClick={ reduceCantidad }>-</button>
                <p>{count}</p>
                <button className="waves-effect waves-light btn-small" onClick={ aumentaCantidad }>+</button>
                
                <button className="waves-effect waves-light btn-small" onClick={ compruebaStock ? () => {
            if(count !== 0) {

                setCount(initial)
                
                onAdd(count)
                
            } else {
                console.log('Seleccina productos para agregar al carrito')
        }} : console.log('Selecciona productos para agregar al carrito') } >Agregar al carrito</button>
            </div>
        )
}

export default ItemCount