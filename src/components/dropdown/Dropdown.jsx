import './Dropdown.css';
import { IoIosArrowForward } from 'react-icons/io';

const Dropdown = ({ className }) => {
  return (
    <>
      <div className={`dropdown ${className}`}>
        <nav>
          <ul>
            <div className='link'>
              <div className="border active"></div>
              <li className="active">
                <h1>Electric</h1>
                <p>Fully electric</p>
              </li>
            </div>
            <div className='link'>
              <div className="border"></div>
              <li>
                <h1>Hybrids</h1>
                <p>Plug-in hybrid</p>
              </li>
            </div>
            <div className='link'>
              <div className="border"></div>
              <li>
                <h1>Mild hybrids</h1>
                <p>Petrol</p>
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
      <div className={`dropdown active`}>

      </div>
    </>
  )
}

export default Dropdown;
