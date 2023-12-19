import "./CartItem.css";

const CartItem = ({ carType, model, image, price, quantity, updateQuantity}) => {
  return (
    <div className="cartItem">
      <div className="item-container">
        <p className='car-type'>{carType}</p>
        <h3><strong>{model}</strong> plug-in hybrid</h3>
        <div className='img-container'>
          <img src={image}></img>
        </div>
        <div className="item-price">
          <div className="buttons">
            <button className="remove-item" onClick={() => updateQuantity('decrement')}>-</button>
            <p>{quantity}</p>
            <button className="add-item active" onClick={() => updateQuantity('increment')}>+</button>
          </div>
          <p className="buying-price">Price <strong>${price * quantity}</strong></p>
        </div>
        
      </div>
    </div>
  )
}

export default CartItem;
