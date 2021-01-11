import React , {useEffect, useState} from 'react'
import Item from './Item';
import ItemDetailContainer from './ItemDetailContainer';

const ItemList = () => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        const promesa = new Promise((resolver, reject) => {
            
            setTimeout(()=>{
                const items = [
                    {id:1, title: "evento 1", description:"descripcion del evento uno", price:500, pictureUrl:"https://i.pinimg.com/originals/7c/06/8b/7c068be74941226b80161e8cc8dafa01.jpg"},
                    {id:2, title: "evento 2", description:"descripcion del evento dos", price:500, pictureUrl:"https://i.pinimg.com/originals/7c/06/8b/7c068be74941226b80161e8cc8dafa01.jpg"},
                    {id:3, title: "evento 3", description:"descripcion del evento tres", price:500, pictureUrl:"https://i.pinimg.com/originals/7c/06/8b/7c068be74941226b80161e8cc8dafa01.jpg"},
                    {id:4, title: "evento 4", description:"descripcion del evento cuatro", price:500, pictureUrl:"https://i.pinimg.com/originals/7c/06/8b/7c068be74941226b80161e8cc8dafa01.jpg"}]
                console.log('terminado el timeout')
                resolver(items)
            },2000)

            
        })

        promesa
        .then((resultado) => {
            setProductos(resultado)
        })
        
    }, [])

    return (
        <>
            {productos.length > 0 ? productos.map((item) => {
                return(
                    <>
                <Item key={'itm' + item.id} id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl}/>
                <ItemDetailContainer />
                </>
                )
            }) : <p>Cargando eventos...</p>}
        </>
    )
}

export default ItemList