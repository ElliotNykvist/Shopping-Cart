import MainCart from '../components/mainCart/MainCart';

const Cart = ({ cartItems }) => {
  return (
    <div className="cartContainer">
      <MainCart cartItems={cartItems}/>
    </div>
  )
}

export default Cart;