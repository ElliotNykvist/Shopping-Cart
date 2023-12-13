import './Dropdown.css';
import { IoIosArrowForward } from 'react-icons/io';

const Dropdown = ({ activeDropdown }) => {
  return (
    <>
      <div className={`dropdown ourCars ${activeDropdown === 'ourCars' ? 'active' : ''}`}>
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
      <div className={`dropdown shop ${activeDropdown === 'Shop' ? 'active' : ''}`}>
        <nav>
          <ul>
            <li><h3>OWN A VOLVO</h3></li>
            <li><a>Order your Volvo online</a></li>
            <li><a>Car configurator</a></li>
            <li><a>Offers</a></li>
            <li><a>Approved used cars</a></li>
            <li><a>Motability</a></li>
            <li><a>Price list</a></li>
            <li><a>Insurance</a></li>
          </ul>
          <ul>
            <li><h3>CAR FINANCE</h3></li>
            <li><a>Subscription</a></li>
            <li><a>PCP</a></li>
            <li><a>Lease</a></li>
            <li><a>Purchase</a></li>
            <li><a>Volvo Loan</a></li>
            <li><a>Part Exchange</a></li>
            <li><a>FAQ</a></li>
          </ul>
          <ul>
            <li><h3>VOLVO FOR BUSINESS</h3></li>
            <li><a>Fleet and Business</a></li>
            <li><a>Get In touch</a></li>
            <li><a>Book a Demonstrator</a></li>
            <li><a>Business login</a></li>
          </ul>
          <ul>
            <li><h3>Extras</h3></li>
            <li><a>Book a test drive</a></li>
            <li><a>Find a retailer</a></li>
            <li><a>Car accessories</a></li>
            <li><a>Talk to a Volvo Specialist</a></li>
            <li><a>Subscribe to Newsletter</a></li>
            <li><a>Car comparison tool</a></li>
          </ul>
        </nav>
      </div>
      <div className={`dropdown owners ${activeDropdown === 'Owners' ? 'active' : ''}`}>
        <nav>
          <ul>
            <li><h3>SERVICE</h3></li>
            <li><a>Book a service</a></li>
            <li><a>Car accessories</a></li>
          </ul>
          <ul>
            <li><h3>SUPPORT</h3></li>
            <li><a>Support centre</a></li>
            <li><a>Complaints procedure</a></li>
            <li><a>Contact us</a></li>
          </ul>
          <ul>
            <li><h3>VOLVO ACCOUNT</h3></li>
            <li><a>Account login</a></li>
            <li><a>Volvo Cars app</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Dropdown;
