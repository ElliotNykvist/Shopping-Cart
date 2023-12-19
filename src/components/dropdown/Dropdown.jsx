import './Dropdown.css';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Dropdown = ({ activeDropdown }) => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    // Navigate to the error page
    navigate('/error');
  };

  return (
    <>
      <div className={`dropdown ourCars ${activeDropdown === 'ourCars' ? 'active' : ''}`}>
        <nav>
          <ul>
            <div className='link' onClick={handleLinkClick}>
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
            <li><a href="/error">Order your Volvo online</a></li>
            <li><a href="/error">Car configurator</a></li>
            <li><a href="/error">Offers</a></li>
            <li><a href="/error">Approved used cars</a></li>
            <li><a href="/error">Motability</a></li>
            <li><a href="/error">Price list</a></li>
            <li><a href="/error">Insurance</a></li>
          </ul>
          <ul>
            <li><h3>CAR FINANCE</h3></li>
            <li><a href="/error">Subscription</a></li>
            <li><a href="/error">PCP</a></li>
            <li><a href="/error">Lease</a></li>
            <li><a href="/error">Purchase</a></li>
            <li><a href="/error">Volvo Loan</a></li>
            <li><a href="/error">Part Exchange</a></li>
            <li><a href="/error">FAQ</a></li>
          </ul>
          <ul>
            <li><h3>VOLVO FOR BUSINESS</h3></li>
            <li><a href="/error">Fleet and Business</a></li>
            <li><a href="/error">Get In touch</a></li>
            <li><a href="/error">Book a Demonstrator</a></li>
            <li><a href="/error">Business login</a></li>
          </ul>
          <ul>
            <li><h3>Extras</h3></li>
            <li><a href="/error">Book a test drive</a></li>
            <li><a href="/error">Find a retailer</a></li>
            <li><a href="/error">Car accessories</a></li>
            <li><a href="/error">Talk to a Volvo Specialist</a></li>
            <li><a href="/error">Subscribe to Newsletter</a></li>
            <li><a href="/error">Car comparison tool</a></li>
          </ul>
        </nav>
      </div>
      <div className={`dropdown owners ${activeDropdown === 'Owners' ? 'active' : ''}`}>
        <nav>
          <ul>
            <li><h3>SERVICE</h3></li>
            <li><a href="/error">Book a service</a></li>
            <li><a href="/error">Car accessories</a></li>
          </ul>
          <ul>
            <li><h3>SUPPORT</h3></li>
            <li><a href="/error">Support centre</a></li>
            <li><a href="/error">Complaints procedure</a></li>
            <li><a href="/error">Contact us</a></li>
          </ul>
          <ul>
            <li><h3>VOLVO ACCOUNT</h3></li>
            <li><a href="/error">Account login</a></li>
            <li><a href="/error">Volvo Cars app</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Dropdown;
