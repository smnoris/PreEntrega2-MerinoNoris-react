import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const imgLogo = "../png/safi-furra.png";
  return (
    <header>
      <Link to={"/"}>
        <img className="imgLogo" src={imgLogo} alt="" />
      </Link>
      <nav>
      <ul>
        <li>
          <NavLink to={"/"}> Home </NavLink>
        </li>

        <li>
          <NavLink to={"/categoria/2"}> Tradicional </NavLink>
        </li>

        <li>
          <NavLink to={"/categoria/3"}> Digital </NavLink>
        </li>
        
      </ul>
      </nav>
      <CartWidget /> 
    </header>
  )
}

export default NavBar
