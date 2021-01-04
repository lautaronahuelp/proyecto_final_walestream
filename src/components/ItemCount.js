import React , {useState} from 'react'

const ItemCount = () => {

        const [count, setCount] = useState(0)
        const [stock, setStock] = useState(20)

        function aumentaCantidad () {
            if (count < stock) {
                setCount(count + 1)
            } else {
                console.log('No hay mas stock')
            }
        }

        function reduceCantidad () {
            if (count > 0) {
                setCount(count - 1)
            }
        }

        function agregarAlCarrito () {
            if(count !== 0) {
            setStock(stock - count)

            setCount(0)

            console.log('Se agregó al carrito')
            } else {
                console.log('Seleccina productos para agregar al carrito')
            }

        }

        return (
            <div>
                <button onClick={ reduceCantidad }>-</button>
                <p>{count}</p>
                <button onClick={ aumentaCantidad }>+</button>
                
                <button onClick={ agregarAlCarrito }>Agregar al carrito</button>
            </div>
        )
}

export default ItemCount