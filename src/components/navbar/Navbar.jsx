// NavBar.js
import { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './Navbar.css';
import Hamburger from './Hamburger';  // Update the import statement

// NavBar component
const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropDown = e => {
    const currTarget = e.currentTarget;

    document.querySelectorAll(".menu-options").forEach(btn =>
      btn.classList.remove("active"))
      currTarget.classList.add("active");



  }

  return (
    <nav>
      <Hamburger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className="left">
        <img alt="volvo" src="/volvo.svg"></img>
      </div>
      <aside className={`middle ${isMenuOpen ? 'menu-open' : ''}`}>
        <ul>
          <li>
            <a onClick={toggleDropDown} className="menu-options active">Our cars</a>
          </li>
          <li>
            <a onClick={toggleDropDown} className="menu-options">Shop</a>
          </li>
          <li>
            <a onClick={toggleDropDown} className="menu-options">Owners</a>
          </li>
          <li>
            <a onClick={toggleDropDown} className="menu-options">About Us</a>
          </li>
        </ul>
      </aside>
      <div className="right">
        <a>
          <FiShoppingCart className="cart" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
