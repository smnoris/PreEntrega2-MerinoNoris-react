import './CartWidget.css'
import ItemCount from '../ItemCount/ItemCount';

const CartWidget = () => {
    const imgCarrito = '../png/carrito-de-compras.png';
  return (
    <div>
        <img className='imagCarrito' src={imgCarrito} alt="Carrito" />
        <strong> 3 </strong>
    </div>
  )
}

export default CartWidget