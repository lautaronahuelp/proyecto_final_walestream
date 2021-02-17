import React , { useEffect , useState , useContext } from 'react'
import ItemDetail from './ItemDetail'
import Loader from './Loader'
import NotFound from './NotFound'
import { useParams } from 'react-router-dom'
import DatabaseContext from '../context/DatabaseContext'


const ItemDetailContainer = () => {
    const contexto = useContext(DatabaseContext)
    const [evento, setEvento] = useState({})
    const [promesaTerminada, setPromesaTerminada] = useState(false)
    
    const { id } = useParams()

    useEffect(() => {
        contexto.obtenerDetalle(id)
        .then((item) =>{
            const item_detalle = {
                id: item.id,
                ...item.data()
            }
            if(item_detalle.hasOwnProperty('id') && item_detalle.hasOwnProperty('title')){
                setEvento(item_detalle)
                setPromesaTerminada(true)
            }else{
                setPromesaTerminada(true)
            }
            
            
        })
        .catch((error) => {
            console.log('fallo ' + error)
        })
    }, [id, contexto])

    return (
        <div className="row">
        {evento.hasOwnProperty('title') ? <ItemDetail id={evento.id} title={evento.title} description={evento.description} price={evento.price} stock={evento.stock} pictureUrl={evento.pictureUrl}/> : promesaTerminada ? <NotFound /> : <Loader />}
        </div>
    )
}

export default ItemDetailContainer