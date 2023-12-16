import { FiShoppingCart } from 'react-icons/fi';
import './MainCart.css';

const mainCart = () => {
  return (
    <>
      <div className='cartLeft'>
        <FiShoppingCart className='cart'/>
        <h1>Your cart is empty</h1>
      </div>
      <div className='cartRight'>
        <h1>Total</h1>
        <div>
          <h2>Sub-total</h2>
          <p>$29.40</p>
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

export default mainCart;