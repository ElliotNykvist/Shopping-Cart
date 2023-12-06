import { useState, useEffect, useRef } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import Card from './Card';
import './ResponsiveSlider.css';

function ResponsiveSlider() {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [items, setItems] = useState(0);
  const [count, setCount] = useState(0);
  const sliderListRef = useRef(null);
  const gap = 1.2; // Specify your desired gap between cards here

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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
      <div className="prev-next">
        <button onClick={prevSlide} disabled={count === 0} className={`prev-btn ${count === 0 ? 'active' : ''}`}>
          <IoIosArrowBack />
        </button>
        <button onClick={nextSlide} disabled={count >= items - 4} className={`next-btn ${count >= items - 4 ? 'active' : ''}`}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default ResponsiveSlider;


/*
const Card = () => {
  return (
    <div className="card">
      <div className="card-effect">
        <p className='car-type'>SUV</p>
        <h3><strong>EX30</strong> plug-in hybrid</h3>
        <p className="buying-price">Buy from <strong>$35,795</strong></p>
        <div className='img-container'>
          <img src="./volvo.jpg"></img>
        </div>
      </div>
      <div className="card-button">
        <div><a>Learn</a><IoIosArrowForward/></div>
        <div><a>Shop</a><IoIosArrowForward/></div>
      </div>
    </div>
  )
}

export default Card;
*/

