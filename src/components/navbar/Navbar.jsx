import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav>
        <div className="left">
          <img alt="volvo" src="/volvo.svg"></img>
        </div>
        <ul className="middle">
          <li>
            <a>Our cars</a>
          </li>
          <li>
            <a>Shop</a>
          </li>
          <li>
            <a>Owners</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
        <div className="right">
          <a><FiShoppingCart className="cart"/></a>
        </div>
      </nav>
  )
}

export default NavBar;