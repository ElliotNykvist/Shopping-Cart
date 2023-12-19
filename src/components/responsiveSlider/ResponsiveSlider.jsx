// ResponsiveSlider.jsx
import { useState, useEffect, useRef } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import Card from '../card/Card';
import './ResponsiveSlider.css';

function ResponsiveSlider({ selectedCarType, checkActive }) {
  const [cars, setCars] = useState([]);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [items, setItems] = useState(0);
  const [count, setCount] = useState(0);
  const sliderListRef = useRef(null);
  const gap = 1.2; // Specify your desired gap between cards here

  useEffect(() => {
    // Fetch data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/volvo-cars', { mode: 'cors' });
        const data = await response.json();
        
        // Filter cars based on the selected type
        const filteredCars = selectedCarType ? data.filter(car => car.type === selectedCarType) : data;

        setCars(filteredCars);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedCarType]);

  useEffect(() => {
    if (sliderListRef.current) {
      const card = document.querySelector('.card');
      if (card) {
        const cardWidth = card.clientWidth;
        const cardMarginRight = parseInt(window.getComputedStyle(card).marginRight, 10);
        setSliderWidth(cardWidth + cardMarginRight + gap);
        setItems(sliderListRef.current.querySelectorAll('.card').length);
      }
    }
  }, [cars, gap]);

  useEffect(() => {
    if (sliderListRef.current) {
      sliderListRef.current.style.transform = `translateX(-${count * sliderWidth}px)`;
    }
  }, [count, sliderWidth]);

  const prevSlide = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const nextSlide = () => {
    if (count < items - 1) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleCardClick = (carType) => {
    // Call the checkActive function from the Main component
    checkActive(null, carType);
  };
  
  return (
    <div className="container">
      <ul className="slider-list" ref={sliderListRef}>
        {cars.map((car) => (
          <Card key={car.id} car={car} onClick={() => handleCardClick(car.type)} />
        ))}
      </ul>
      <div className="prev-next">
        <button onClick={prevSlide} disabled={count === 0} className={`prev-btn ${count === 0 ? 'active' : ''}`}>
          <IoIosArrowBack />
        </button>
        <button
          onClick={nextSlide}
          disabled={count >= items - 4}
          className={`next-btn ${count >= items - 4 ? 'active' : ''}`}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default ResponsiveSlider;
