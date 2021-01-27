import React , {useEffect, useState , useContext } from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'
import Loader from './Loader'
import DatabaseContext from '../context/DatabaseContext'

const ItemList = ({ catId }) => {
    
    const contexto = useContext(DatabaseContext)
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        contexto.obtenerProductos(catId)
    
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

            setProductos(items)
            
        })
        .catch((err) => {
            console.log('error:')
            console.log(err)
        })
    }, [catId, contexto])
    
    
    return (
        <div className="row">
            {productos.length > 0 ? productos.map((item) => {
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