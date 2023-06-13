import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../contex/CarritoContext';

const CartWidget = () => {

    const {cantidadTotal} = useContext(CarritoContext);    

    const imgCarrito = './png/carrito-de-compras.png';

  return (
    <div>
    <Link to='/cart'>
        <img className='imagCarrito' src={imgCarrito} alt="Carrito" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
    </Link>
    </div>
  )

}

export default CartWidget