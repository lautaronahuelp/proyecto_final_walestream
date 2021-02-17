import React , { useState , useContext } from 'react'
import DatabaseContext from '../context/DatabaseContext'
import CartContext from '../context/CartContext'

const CheckOut = ({compra, total}) => {

    const contextoDB = useContext(DatabaseContext)
    const contextoCart = useContext(CartContext)

    const [apellido, setApellido] = useState("")
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [ordenId,setOrdenId] = useState("")


    return (
        <>
        {compra.length > 0 ?
        <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" value={apellido} onChange={(evt) => {setApellido(evt.target.value)}}></input>
              <label htmlFor="first_name">Apellido</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" value={nombre} onChange={(evt) => {setNombre(evt.target.value)}}></input>
              <label htmlFor="last_name">Nombre</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" value={email} onChange={(evt) => {setEmail(evt.target.value)}}></input>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="telephone" type="tel" className="validate" value={telefono} onChange={(evt) => {setTelefono(evt.target.value)}}></input>
              <label htmlFor="telephone">Teléfono</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
                <button onClick={(evt) => {
                    evt.preventDefault()
                    contextoDB.crearOrden(apellido, nombre, email, telefono, compra, total)
                    .then((resultado) => {
                        contextoCart.clear()
                        setOrdenId(resultado.id)

                    })
                    .catch((error) => {
                        console.log('cachiado:')
                        console.log(error.id)
                    })

                    }} className="waves-effect waves-light btn"><i className="material-icons right">shop</i>finalizar compra</button>
            </div>
          </div>
        </form>
      </div>
      : ordenId !== "" ? <div className="row"><div className="col s12"><h3>Compra realizada con exito.</h3><p>Código de su compra: {ordenId}</p></div></div> :<></>}
      </>
    )
}

export default CheckOut