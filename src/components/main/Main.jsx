import ResponsiveSlider from '../responsiveSlider/ResponsiveSlider';
import "./Main.css";
import { useState } from 'react';

const Main = () => {
  const [selectedCarType, setSelectedCarType] = useState(null);

  const checkActive = (e, carType) => {
    e.preventDefault();
    setSelectedCarType(carType);
    const currTarget = e.currentTarget;

    document.querySelectorAll('.car-type').forEach(btn =>
      btn.classList.remove('active'));
    currTarget.classList.add('active');
  };

  return (
    <main>
      <h1>Order your Volvo car online today</h1>
      <nav aria-label='Car types'>
        <ul className='car-types'>
          <li><a onClick={(e) => checkActive(e, null)} className={`car-type ${selectedCarType === null ? 'active' : ''}`}>All</a></li>
          <li><a onClick={(e) => checkActive(e, 'SUV')} className={`car-type ${selectedCarType === 'SUV' ? 'active' : ''}`}>SUV</a></li>
          <li className='nav-hidden'><a onClick={(e) => checkActive(e, 'Estate')} className={`car-type ${selectedCarType === 'Estate' ? 'active' : ''}`}>Estate</a></li>
          <li className='nav-hidden'><a onClick={(e) => checkActive(e, 'Saloon')} className={`car-type ${selectedCarType === 'Saloon' ? 'active' : ''}`}>Saloon</a></li>
        </ul>
      </nav>
      <div className="slider">
        <ResponsiveSlider selectedCarType={selectedCarType} />
      </div>
    </main>
  );
}

export default Main;
