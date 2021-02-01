import React , { useContext , useEffect , useState } from 'react'
import { NavLink } from 'react-router-dom'
import DatabaseContext from '../context/DatabaseContext'

const CategoriesList = () => {
    const [categories, setCategories] = useState([])
    const contexto = useContext(DatabaseContext)

    useEffect(() => {
        contexto.obtenerCategorias()
        .then((resultado) => {
            
            setCategories(Object.values(resultado.docs[0].data()))
        })
        .catch((err) => {
            console.log('error: '+err)
        })
    })

    return(
        <>
        {categories.map((cate) => {
            return(
                <li key={cate}><NavLink to={"/category/"+cate}>{cate}</NavLink></li>
            )
        }
        )}
        </>
    )
}

export default CategoriesList