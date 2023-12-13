import { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './Navbar.css';
import Hamburger from './Hamburger';
import Dropdown from '../dropdown/Dropdown';

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
          <img alt="volvo" src="/volvo.svg"></img>
        </div>
        <aside className={`middle ${isMenuOpen ? 'menu-open' : ''}`}>
          <ul>
            <li onClick={() => onLinkClick('ourCars')}>
              <a className={`menu-options ${activeDropdown === 'ourCars' ? 'active' : ''}`}>Our cars</a>
            </li>
            <li onClick={() => onLinkClick('Shop')}>
              <a className={`menu-options ${activeDropdown === 'Shop' ? 'active' : ''}`}>Shop</a>
            </li>
            <li onClick={() => onLinkClick('Owners')}>
              <a className={`menu-options ${activeDropdown === 'Owners' ? 'active' : ''}`}>Owners</a>
            </li>
            <li onClick={() => onLinkClick('About Us')}>
              <a className={`menu-options ${activeDropdown === 'About Us' ? 'active' : ''}`}>About Us</a>
            </li>
          </ul>
        </aside>
        <div className="right">
          <a>
            <FiShoppingCart className="cart" />
          </a>
        </div>
      </nav>
      <Dropdown activeDropdown={activeDropdown} />
    </>
  );
};

export default NavBar;