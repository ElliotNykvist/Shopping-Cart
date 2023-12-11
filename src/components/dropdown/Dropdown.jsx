import './Dropdown.css';
import { IoIosArrowForward } from 'react-icons/io';

const Dropdown = () => {
  return (
    <div className="dropdown">
      <nav>
        <ul>
          <div className='link'>
            <div className="border active"></div>
            <li className="active">
              <h1>Electric</h1>
              <p>pure Electric</p>
            </li>
          </div>
          <div className='link'>
            <div className="border"></div>
            <li>
              <h1>Hybrids</h1>
              <p>Hybrid</p>
            </li>
          </div>
          <div className='link'>
            <div className="border"></div>
            <li>
              <h1>Mild hybrids</h1>
              <p>Mild hybrids | Micro hybrids</p>
            </li>
          </div>
        </ul>
        <div className="offer">
          <h1>CURRENT OFFERS</h1>
          <div>
          <li>View offer </li> 
          <IoIosArrowForward />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Dropdown;
