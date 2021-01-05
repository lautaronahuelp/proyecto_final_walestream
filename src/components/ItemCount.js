import React , {useState} from 'react'

const ItemCount = ({sto, ini, onAdd}) => {

        const [count, setCount] = useState(ini)
        const [stock, setStock] = useState(sto)

        console.log(stock)

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

        function agregaAlCarrito() {
            if(count !== 0) {
                setStock(stock - count)

                setCount(ini)

                onAdd()
            } else {
                console.log('Seleccina productos para agregar al carrito')
            }
        }


        return (
            <div>
                <button onClick={ reduceCantidad }>-</button>
                <p>{count}</p>
                <button onClick={ aumentaCantidad }>+</button>
                
                <button onClick={ compruebaStock ? agregaAlCarrito : console.log('Selecciona productos para agregar al carrito') } >Agregar al carrito</button>
            </div>
        )
}

export default ItemCount