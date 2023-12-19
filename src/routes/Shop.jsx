import Item from '../components/item/Item'
import { useState, useEffect } from 'react';

const Shop = ({ addToCart }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/volvo-cars', { mode: 'cors' });
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  
  return (
    <div className="shopContainer">
      <div className='shopBox'>
        {cars.map((car) => (
          <Item key={car.id} car={car} addToCart={() => {
            console.log("Adding to cart:", car)
            addToCart(car)}}/>
        ))}
      </div>
    </div>
  )
}

export default Shop;