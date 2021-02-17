import React , { useContext , useEffect , useState } from 'react'
import { NavLink } from 'react-router-dom'
import DatabaseContext from '../context/DatabaseContext'

const CategoriesList = () => {
    
    const contexto = useContext(DatabaseContext)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        if(contexto.categories.length > 0){
            setCategories(contexto.categories)
        } else {
            contexto.obtenerCategorias()
        }
    },[contexto])

    return(
        <>
        {categories.map((cate) => {
            return(
                <li key={cate.key}><NavLink to={"/category/"+cate.key}>{cate.description}</NavLink></li>
            )
        }
        )}
        </>
    )
}

export default CategoriesList