import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../contex/CarritoContext";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {

  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2> No hay prductos en el carrito </h2>
        <Link className="checkout" to='/'> Seguir Comprando </Link>
      </>
    )
  }

  return (
    <>
    <hr />
      {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
      <h3> Cantidad total: {cantidadTotal} </h3>
      <h3> Total: ${total} </h3>
      <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
      
      <hr />
      <Link className="checkout" to="/checkout"> Finalizar Compra </Link>

    </>
  )
}

export default Cart