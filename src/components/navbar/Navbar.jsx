import { useState, useEffect } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './Navbar.css';
import Hamburger from './Hamburger';
import Dropdown from '../dropdown/Dropdown';
import { Link } from "react-router-dom";

const NavBar = ({ totalQuantity }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    // Whenever the activeDropdown changes, update the isPageFixed state
    document.body.classList.toggle('fixed', ((activeDropdown === 'ourCars') || (activeDropdown === 'Shop') || (activeDropdown === 'Owners')));
  }, [activeDropdown]);


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const onLinkClick = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };


  return (
    <>
      <nav className='main-nav'>
        <Hamburger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <div className="left">
          <Link to="/" onClick={() => onLinkClick('logo')}>
            <img alt="volvo" src="/volvo.svg" className={`${activeDropdown === 'logo' ? 'active' : ''}`}></img>
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
            <li onClick={() => onLinkClick('About')}>
              <Link to="/About" className={`link menu-options ${activeDropdown === 'About' ? 'active' : ''}`}>About Us</Link>
            </li>
          </ul>
        </aside>
        <div className="right">
          <Link to="/Cart" className="link" onClick={() => onLinkClick('Cart')}>
            <FiShoppingCart className={`cart ${activeDropdown === 'About Us' ? 'active' : ''}`}/>
            <div className={`cartItems ${totalQuantity !== 0 ? 'active' : ''}`}>{totalQuantity}</div>
          </Link>
        </div>
      </nav>
      <Dropdown activeDropdown={activeDropdown} />
    </>
  );
};

export default NavBar;