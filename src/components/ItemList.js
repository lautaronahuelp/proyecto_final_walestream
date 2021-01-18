import React , {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Item from './Item';

const ItemList = ({ catId }) => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        const promesa = new Promise((resolver, reject) => {
            
            setTimeout(()=>{
                const itemsFull = [
                    {id:1, title: "evento 1", category: "obras", description:"descripcion del evento uno", price:500, pictureUrl:"https://i.pinimg.com/originals/7c/06/8b/7c068be74941226b80161e8cc8dafa01.jpg"},
                    {id:2, title: "evento 2", category: "recitales", description:"descripcion del evento dos", price:500, pictureUrl:"https://i.pinimg.com/originals/7c/06/8b/7c068be74941226b80161e8cc8dafa01.jpg"},
                    {id:3, title: "evento 3", category: "recitales", description:"descripcion del evento tres", price:500, pictureUrl:"https://i.pinimg.com/originals/7c/06/8b/7c068be74941226b80161e8cc8dafa01.jpg"},
                    {id:4, title: "evento 4", category: "conferencias", description:"descripcion del evento cuatro", price:500, pictureUrl:"https://i.pinimg.com/originals/7c/06/8b/7c068be74941226b80161e8cc8dafa01.jpg"}]
                let items = []
                
                if (catId !== undefined){
                    items = itemsFull.filter((f) =>{
                        return f.category === catId
                    }
                    )
                } else {
                    items = itemsFull
                }
                
                
                
                console.log('terminado el timeout')


                resolver(items)
            },2000)

            
        })

        promesa
        .then((resultado) => {
            setProductos(resultado)
        })
        
    }, [catId])

    return (
        <>
            {productos.length > 0 ? productos.map((item) => {
                return(
                    <Link  key={'lnk' + item.id}  to={'/items/' + item.id}>
                        <Item key={'itm' + item.id} id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl}/>
                    </Link>
                )
            }) : <p>Cargando eventos...</p>}
        </>
    )
}

export default ItemList