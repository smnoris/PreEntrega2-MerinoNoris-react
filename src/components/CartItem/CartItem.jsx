import { useContext } from "react";
import { CarritoContext } from "../../contex/CarritoContext";
import './CartItem.css'

const CartItem = ({item, cantidad}) => {

    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <>
      <h4> {item.nombre} </h4>
      <p className="detalle"> Cantidad: {cantidad} </p>
      <p className="detalle"> Precio: $ {item.precio}</p>
      <button onClick={()=> eliminarProducto(item.id) }> Eliminar </button>
    </>
  )
}

export default CartItem