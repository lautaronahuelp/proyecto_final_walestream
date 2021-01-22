import React , { useEffect , useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [evento, setEvento] = useState({})

    const { id } = useParams()

    useEffect(() => {

        const getItems = new Promise((res, rej) =>{

            setTimeout(()=>{
                const eventos = [
                    {id:"1", title: "evento 1", category: "obras", description:"descripcion del evento uno", price:500, pictureUrl:"https://i.pinimg.com/originals/7c/06/8b/7c068be74941226b80161e8cc8dafa01.jpg"},
                    {id:"2", title: "evento 2", category: "recitales", description:"descripcion del evento dos", price:500, pictureUrl:"https://i.pinimg.com/originals/7c/06/8b/7c068be74941226b80161e8cc8dafa01.jpg"},
                    {id:"3", title: "evento 3", category: "recitales", description:"descripcion del evento tres", price:500, pictureUrl:"https://i.pinimg.com/originals/7c/06/8b/7c068be74941226b80161e8cc8dafa01.jpg"},
                    {id:"4", title: "evento 4", category: "conferencias", description:"descripcion del evento cuatro", price:500, pictureUrl:"https://i.pinimg.com/originals/7c/06/8b/7c068be74941226b80161e8cc8dafa01.jpg"}]
                let item = {}
                
                if (id !== undefined){
                    item  = eventos.filter((f) =>{
                        return f.id === id
                    }
                    
                    )
                    
                }
                
                
                
                console.log('terminado el timeout deatail' + id)


                res(item)
            },2000)
        })

        getItems
        .then((ret) =>{
            setEvento(ret)
            
        })
    }, [id])

    return (
        <>
        {evento.length >0 ? <ItemDetail id={evento[0].id} title={evento[0].title} description={evento[0].description} price={evento[0].price} pictureUrl={evento[0].pictureUrl}/> : <p>Cargando detalles...</p>}
        </>
    )
}

export default ItemDetailContainer