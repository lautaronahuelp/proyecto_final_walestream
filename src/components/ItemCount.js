import React , {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

        const [count, setCount] = useState(initial)

        function aumentaCantidad () {
            if (compruebaStock) {
                setCount(count + 1)
            }
        }

        function reduceCantidad () {
            if (count > 0) {
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
                <button onClick={ reduceCantidad }>-</button>
                <p>{count}</p>
                <button onClick={ aumentaCantidad }>+</button>
                
                <button onClick={ compruebaStock ? () => { onAdd(count, initial, setCount)} : console.log('Selecciona productos para agregar al carrito') } >Agregar al carrito</button>
            </div>
        )
}

export default ItemCount