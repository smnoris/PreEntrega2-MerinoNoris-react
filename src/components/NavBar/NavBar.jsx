import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const imgLogo = '../png/SAFI FURRA.png';
  return (
    <header>
      <Link to={"/"}>
        <img className="imgLogo" src={imgLogo} alt="Logo Tienda" />
      </Link>
      <ul>
        <li>
          <NavLink to={`/`}>Home</NavLink>
        </li>

        <li>
          <NavLink to={`/categoria/2`}>Digital</NavLink>
        </li>

        <li>
          <NavLink to={`/categoria/3`} >Tradicional</NavLink>
        </li>
      </ul>
      <CartWidget />
    </header>
  )
}

export default NavBar
