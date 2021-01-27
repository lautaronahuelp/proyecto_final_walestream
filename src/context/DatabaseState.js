import React from 'react'
import DatabaseContext from './DatabaseContext'
import { firestore } from '../firebaseConfig'

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
       console.log('ENTRO A OBTENER DETALLE')
       let query = collection.doc(id).get()
       return query
        
        
    }

    return (
        <DatabaseContext.Provider value={{ obtenerProductos , obtenerDetalle }}>
            {children}
        </DatabaseContext.Provider>
    )


}

export default DatabaseState