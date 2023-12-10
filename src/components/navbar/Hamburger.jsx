import './Hamburger.css';

const Hamburger = ({ toggleMenu, isMenuOpen }) => {
  return (
    <div className="hamburger" onClick={toggleMenu}>
      <div className={`bar bar1 ${isMenuOpen ? 'open' : ''}`}></div>
      <div className={`bar bar2 ${isMenuOpen ? 'open' : ''}`}></div>
      <div className={`bar bar3 ${isMenuOpen ? 'open' : ''}`}></div>
    </div>
  );
};

export default Hamburger;  // Add this line to export the component