// NavBar.js
import { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './Navbar.css';
import Hamburger from './Hamburger';
import Dropdown from '../dropdown/Dropdown';

// NavBar component
const NavBar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdown, setDropdown] = useState(false); 
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleLink = (link) => {
    setActiveLink(link);
  };

  const onLinkClick = () => {
    if(!isDropdown) {
      setDropdown(true)
    } else {
      setDropdown(false)
    }
  }




  return (
    <>
      <nav>
        <Hamburger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <div className="left">
          <img alt="volvo" src="/volvo.svg"></img>
        </div>
        <aside className={`middle ${isMenuOpen ? 'menu-open' : ''}`}>
          <ul>
            <li onClick={onLinkClick}>
              <a onClick={() => toggleLink('ourCars')}
          className={`menu-options ${activeLink === 'ourCars' ? 'active' : ''}`}>Our cars</a>
            </li>
            <li onClick={onLinkClick}>
              <a onClick={() => toggleLink('Shop')}
          className={`menu-options ${activeLink === 'Shop' ? 'active' : ''}`}>Shop</a>
            </li>
            <li onClick={onLinkClick}>
              <a onClick={() => toggleLink('Owners')}
          className={`menu-options ${activeLink === 'Owners' ? 'active' : ''}`}>Owners</a>
            </li>
            <li onClick={onLinkClick}>
              <a onClick={() => toggleLink('About Us')}
          className={`menu-options ${activeLink === 'About Us' ? 'active' : ''}`}>About Us</a>
            </li>
          </ul>
        </aside>
        <div className="right">
          <a>
            <FiShoppingCart className="cart" />
          </a>
        </div>
      </nav>
      <Dropdown className={isDropdown ? 'active' : ''}/>
    </>
  );
};

export default NavBar;
