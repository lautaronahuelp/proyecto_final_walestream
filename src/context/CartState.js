import React , { useState } from 'react'
import CartContext from './CartContext'

const CartState = ({ children }) => {

    const [cart, setCart] = useState([])
    const [levante, setLevante] = useState(false)

    const addItem = (item, quantity) => {
        let cartProvisorio = []
        if (IsInCart(item.id)) {

            let oldQuant
            

            const cartFiltereado = cart.filter((items) => {
                if (items.item.id === item.id){
                    oldQuant = items.quantity
                }

                return items.item.id !== item.id
            })

            const newQuant = oldQuant + quantity


            cartProvisorio = [...cartFiltereado, {item: item, quantity: newQuant}]

            
        } else {
            cartProvisorio = [...cart, {item: item, quantity: quantity}]
            
        }

        setCart(cartProvisorio)
        persistirCart(cartProvisorio)
    }

    const removeItem = (itemid) => {
        const newCart = cart.filter(item => item.item.id !== itemid.target.parentNode.parentNode.id)
        setCart(newCart)
        persistirCart(newCart)
    }
    const clear = () => {
        setCart([])
        localStorage.removeItem('carritoWalestream')
    }
    const IsInCart = (id) => {
        let existe = cart.find(preItem => preItem.item.id === id)

        return existe !== undefined ? true : false
    }

    const totalProductos = () => {
        let precioTot = 0
        let cantTot = 0


        cart.forEach((item)=>{

            precioTot += item.item.price * item.quantity
            cantTot += item.quantity

        })

        let totales = {
            price: precioTot,
            quantity: cantTot
        }


        return totales
    }

    const persistirCart = (cartAPersistir) => {
        localStorage.setItem('carritoWalestream', JSON.stringify(cartAPersistir))
    }

    const levantarCart = () => {
        let carritoStor = JSON.parse(localStorage.getItem('carritoWalestream'))
        if ((!levante) && carritoStor) {
            let cartLevantado = []
            carritoStor.forEach((item) => {
                cartLevantado = [...cartLevantado, { item: item.item, quantity: item.quantity }]
                
            })
            setCart(cartLevantado)
            setLevante(true)
        }
    }

    return(
        <CartContext.Provider value={{cart , addItem , removeItem , clear, totalProductos, levantarCart}}>
            { children }
        </CartContext.Provider>
    )

}


export default CartState
