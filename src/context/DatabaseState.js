import React from 'react'
import DatabaseContext from './DatabaseContext'
import { firestore } from '../firebaseConfig'
import firebase from 'firebase/app'

const DatabaseState = ({children}) => {
    const db = firestore
    const collection = db.collection('items')
    


    const obtenerProductos = (categoria) => {
        let query = collection
        if(categoria !== undefined){
            query = collection.where('category','==', categoria).get()
        } else {
            query = collection.get()
        }

        
        return query
        
        
    }

    const obtenerDetalle = (id) => {
       let query = collection.doc(id).get()
       return query
        
        
    }

    const obtenerCategorias = () => {
        let collection = db.collection('categories')
        let query = collection.get()
        return query
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
        <DatabaseContext.Provider value={{ obtenerProductos , obtenerDetalle , obtenerCategorias , crearOrden}}>
            {children}
        </DatabaseContext.Provider>
    )


}

export default DatabaseState