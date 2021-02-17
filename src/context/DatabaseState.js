import React , { useState } from 'react'
import DatabaseContext from './DatabaseContext'
import { firestore } from '../firebaseConfig'
import firebase from 'firebase/app'

const DatabaseState = ({children}) => {
    const db = firestore
    const collection = db.collection('items')
    const [productosCont, setProductosCont] = useState([])
    const [categories, setCategories] = useState([])


    const obtenerProductos = (categoria) => {
        let query = collection
        if(categoria !== undefined){
            query = collection.where('category','==', categoria).get()
        } else {
            query = collection.get()
        }
        
        query
        .then((resultado) => {
            let items =[]
            const item_array = resultado.docs
            
            item_array.forEach(item=>{
                
                const producto_final = {
                    id: item.id,
                    ...item.data()
                }

                items = [...items, producto_final]
            })

            setProductosCont(items)
            
        })
        .catch((err) => {
            console.log('error:')
            console.log(err)
        })
        
        
    }

    const obtenerDetalle = (id) => {
       let query = collection.doc(id).get()
       return query
        
        
    }

    const obtenerCategorias = () => {
        let collection = db.collection('categories')
        let query = collection.get()

        query
        .then((resultado) => {
            let categorias =[]
            const cat_array = resultado.docs
            
            cat_array.forEach(cate=>{
                
                const cate_final = {
                    id: cate.id,
                    ...cate.data()
                }

                categorias = [...categorias, cate_final]
            })

            setCategories(categorias)
            
        })
        .catch((err) => {
            console.log('error:')
            console.log(err)
        })

       
    }

    const crearOrden = (apellido, nombre, email, telefono, compra, total) => {
        let collection = db.collection('ordenes')
        let date = firebase.firestore.Timestamp.now()

        const orden ={
            buyer: {
                nombre:nombre,
                apellido:apellido,
                email:email,
                telefono:telefono
            },
            items:compra,
            date:date,
            total:total
        }

        let query = collection.add(orden)
        return query

    }

    return (
        <DatabaseContext.Provider value={{ categories , productosCont , obtenerProductos , obtenerDetalle , obtenerCategorias , crearOrden}}>
            {children}
        </DatabaseContext.Provider>
    )


}

export default DatabaseState