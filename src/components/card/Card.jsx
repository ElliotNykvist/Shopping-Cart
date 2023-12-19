import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Card = ({ car }) => {
  return (
    <div className="card">
      <div className="card-effect">
        <p className='car-type'>{car.type}</p>
        <h3><strong>{car.model}</strong> plug-in hybrid</h3>
        <p className="buying-price">Buy from <strong>${(car.price).toLocaleString()}</strong></p>
        <div className='img-container'>
          <img src={car.image} alt={car.model} />
        </div>
      </div>
      <div className="card-button">
        <div><a>Learn</a><IoIosArrowForward/></div>
        <div><Link to='/Shop' className="link-shop" style={{ textDecoration: 'none', color: 'rgb(58, 58, 129)' }}>Shop</Link><IoIosArrowForward/></div>
      </div>
    </div>
  );
}

export default Card;
