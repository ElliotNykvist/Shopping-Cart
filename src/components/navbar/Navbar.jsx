import { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './Navbar.css';
import Hamburger from './Hamburger';
import Dropdown from '../dropdown/Dropdown';
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const onLinkClick = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <>
      <nav className="main-nav">
        <Hamburger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <div className="left">
          <Link to="/">
            <img alt="volvo" src="/volvo.svg"></img>
          </Link>
        </div>
        <aside className={`middle ${isMenuOpen ? 'menu-open' : ''}`}>
          <ul>
            <li onClick={() => onLinkClick('ourCars')}>
              <span className={`menu-options ${activeDropdown === 'ourCars' ? 'active' : ''}`}>Our cars</span>
            </li>
            <li onClick={() => onLinkClick('Shop')}>
              <span className={`menu-options ${activeDropdown === 'Shop' ? 'active' : ''}`}>Shop</span>
            </li>
            <li onClick={() => onLinkClick('Owners')}>
              <span className={`menu-options ${activeDropdown === 'Owners' ? 'active' : ''}`}>Owners</span>
            </li>
            <li onClick={() => onLinkClick('About Us')}>
              <Link to="/About" className={`link menu-options ${activeDropdown === 'About Us' ? 'active' : ''}`}>About Us</Link>
            </li>
          </ul>
        </aside>
        <div className="right">
          <Link to="/Cart" className="link">
            <FiShoppingCart className="cart" />
            <div className="cartItems">1</div>
          </Link>
        </div>
      </nav>
      <Dropdown activeDropdown={activeDropdown} />
    </>
  );
};

export default NavBar;