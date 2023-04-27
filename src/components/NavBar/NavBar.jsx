import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Mi tiendita del horror.</h1>

        <nav>
            <ul>
                <li>Sobre mi</li>
                <li>Galeria</li>                
                <li>Contacto</li>
                <li>Tienda</li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar
