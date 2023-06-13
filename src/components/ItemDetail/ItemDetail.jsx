import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../contex/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, precio, img, stock }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("productos agregados: " + cantidad);

    const item = {id,nombre, precio};
    agregarProducto(item,cantidad);

  }

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3> ID: {id} </h3>
      <p className="descrip-item">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum odit omnis modi consectetur</p>
      <img src={img} alt={nombre} />
      <br></br>
      {
        agregarCantidad > 0 ? (<Link className="btn-end-shop" to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail