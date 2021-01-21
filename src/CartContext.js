import React , { useState , useEffect , createContext } from 'react'

const CartContext = createContext()



const CartState = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        
        if (IsInCart(item.id)) {
            
        } else {

        }
    }

    const removeItem = (itemid) => {}
    const clear = () => {}
    const IsInCart = (id) => {
        let existe = cart.find(preItem => preItem.item.id === id)

        return existe.length > 0 ? true : false
    }


}


export default CartState