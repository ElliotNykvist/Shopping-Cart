import "./Item.css";

const Item = ({ car }) => {

  return (
    <div className="cartItem">
      <div className="item-container">
        <p className='car-type'>{car.type}</p>
        <h3><strong>{car.model}</strong> plug-in hybrid</h3>
        <div className='img-container'>
          <img src={car.image}></img>
        </div>
        <div className="item-price">
          <div className="buttons">
            <button className="add-To-Cart">Add To Cart</button>
          </div>
          <p className="buying-price">Price <strong>${car.price}</strong></p>
        </div>
      </div>
    </div>
  )
}

export default Item;
