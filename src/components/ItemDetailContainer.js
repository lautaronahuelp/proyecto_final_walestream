import React , { useEffect , useState , useContext } from 'react'
import ItemDetail from './ItemDetail'
import Loader from './Loader'
import { useParams } from 'react-router-dom'
import DatabaseContext from '../context/DatabaseContext'


const ItemDetailContainer = () => {
    const contexto = useContext(DatabaseContext)
    const [evento, setEvento] = useState([])
    
    const { id } = useParams()

    useEffect(() => {
        contexto.obtenerDetalle(id)
        .then((item) =>{
            const item_detalle = [{
                id: item.id,
                ...item.data()
            }]
            
            
            setEvento(item_detalle)
            
        })
        .catch(() => {
            console.log('fallo')
        })
    }, [id, contexto])

    return (
        <div className="row">
        {evento.length >0 ? <ItemDetail id={evento[0].id} title={evento[0].title} description={evento[0].description} price={evento[0].price} stock={evento[0].stock} pictureUrl={evento[0].pictureUrl}/> : <Loader />}
        </div>
    )
}

export default ItemDetailContainer