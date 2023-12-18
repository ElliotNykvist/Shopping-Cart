import { useState, useEffect, useRef } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import Card from '../card/Card';
import './ResponsiveSlider.css';

function ResponsiveSlider() {
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
        console.log("Server response:", data);
        setCars(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const card = document.querySelector('.card');
    const cardWidth = card.clientWidth; // Use clientWidth instead of offsetWidth
    const cardMarginRight = parseInt(window.getComputedStyle(card).marginRight, 10);

    setSliderWidth(cardWidth + cardMarginRight + gap);

    const sliderList = document.querySelector('.slider-list');
    setItems(sliderList.querySelectorAll('.card').length);
  }, [gap]);

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
  
  return (
    <div className="container">
      <ul className="slider-list" ref={sliderListRef}>
        {cars.map((car) => (
          console.log("Image path:", car.image),
          <Card key={car.id} car={car} />
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
