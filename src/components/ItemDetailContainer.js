import React , { useEffect , useState} from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    const [evento, setEvento] = useState([])

    useEffect(() => {

        const getItems = new Promise((res, rej) =>{
            setTimeout(() => {
                const item = {id:1, title: "evento 1", description:"descripcion del evento uno", price:500, pictureUrl:"https://i.pinimg.com/originals/7c/06/8b/7c068be74941226b80161e8cc8dafa01.jpg"}
                res(item)
                console.log('terminado taimaut detail')
            }, 2000)
        })

        getItems
        .then((ret) =>{
            setEvento(ret)
        })
    }, [])

    return (
        <>
        {evento.length > 0 ? evento.map((item) => {
            return(
            <ItemDetail id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl}/>
            )
        }) : <p>Cargando detalles...</p>}
        </>
    )
}

export default ItemDetailContainer