import './index.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import Cart from './routes/Cart';
import Shop from './routes/Shop';
import Footer from './components/footer/Footer';
import ErrorPage from './error-page';

function App() {
  // Load cart items from local storage on initial render
  const loadFromLocalStorage = () => {
    const storedItems = localStorage.getItem('cartItems');
    return storedItems ? JSON.parse(storedItems) : [];
  };

  const [cartItems, setCartItems] = useState(loadFromLocalStorage);

  // Save cart items to local storage whenever there is a change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems((prevItems) => {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      });
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (itemId, action) => {
    setCartItems((prevItems) => {
      const newItems = prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: action === 'increment' ? item.quantity + 1 : Math.max(0, item.quantity - 1),
            }
          : item
      );
      return newItems.filter((item) => item.quantity > 0);
    });
  };

  let totalQuantity = 0;

  cartItems.forEach((car) => {
    totalQuantity += car.quantity;
  });

  return (
    <Router>
      <Navbar totalQuantity={totalQuantity} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} updateQuantity={updateQuantity} />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
