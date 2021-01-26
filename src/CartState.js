import React , { useState } from 'react'
import CartContext from './CartContext'

const CartState = ({ children }) => {

    const [cart, setCart] = useState([])

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
            console.log(cartProvisorio)

            
        } else {
            cartProvisorio = [...cart, {item: item, quantity: quantity}]
            
        }

        console.log(cartProvisorio)
        setCart(cartProvisorio)
    }

    const removeItem = (itemid) => {
        const newCart = cart.filter(item => item.item.id !== itemid.target.parentNode.parentNode.id)
        setCart(newCart)
    }
    const clear = () => {
        setCart([])
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

    return(
        <CartContext.Provider value={{cart , addItem , removeItem , clear, totalProductos}}>
            { children }
        </CartContext.Provider>
    )

}


export default CartState
