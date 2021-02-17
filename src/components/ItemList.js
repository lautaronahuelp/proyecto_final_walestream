import React , {useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'
import Loader from './Loader'
import DatabaseContext from '../context/DatabaseContext'

const ItemList = ({ catId }) => {
    
    const contexto = useContext(DatabaseContext)
    

    useEffect(() => {
        let control = []
        if (catId !== undefined){
            const elemento = contexto.productosCont.find((item) => {
                return item.category !== catId
            })

            control = [...control, elemento]
            if(control.length > 0){
                contexto.obtenerProductos(catId)
            }

        } else {
            contexto.obtenerProductos(catId)
        }
        
       

    
    },[catId, contexto])
    
    
    return (
        <div className="row">
            {contexto.productosCont.length > 0 ? contexto.productosCont.map((item) => {
                return(
                    <Link  key={'lnk' + item.id}  to={'/items/' + item.id}>
                        <Item key={'itm' + item.id} id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl}/>
                    </Link>
                )
            }) : <Loader />}
        </div>
    )
}

export default ItemList