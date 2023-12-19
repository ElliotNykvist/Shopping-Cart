import MainCart from '../components/mainCart/MainCart';

const Cart = ({ cartItems, updateQuantity }) => {
  return (
    <div className="cartContainer">
      <MainCart cartItems={cartItems} updateQuantity={updateQuantity}/>
    </div>
  )
}

export default Cart;