import { FiShoppingCart } from 'react-icons/fi';
import './MainCart.css';
import CartItem from '../cartItem/CartItem';

const MainCart = ({ cartItems, updateQuantity }) => {

  return (
    <>
      <div className='cartLeft'>
        <div className='empty'>
          <FiShoppingCart className='cart'/>
          <h1>Your cart is empty</h1>
        </div>
        <div className='items'>
        {cartItems.map((item) => (
          <CartItem 
          key={item.id}
          carType={item.carType}
          model={item.model}
          image={item.image}
          price={item.price}
          quantity={item.quantity}
          updateQuantity={(action) => updateQuantity(item.id, action)} />
        ))}
        </div>
      </div>
      <div className='cartRight'>
        <h1>Total</h1>
        <div>
          <h2>Sub-total</h2>
          <p>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
        </div>
        <div>
          <h2>Delivery</h2>
          <p>$29.40</p>
        </div>
        <button>Checkout</button>
      </div>
    </>
  )
}

export default MainCart;