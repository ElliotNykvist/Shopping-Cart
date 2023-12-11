import ResponsiveSlider from '../responsiveSlider/ResponsiveSlider';
import "./Main.css";

const Main = () => {

  const checkActive = e => { 
    const currTarget = e.currentTarget;

    document.querySelectorAll('.car-type').forEach(btn =>
      btn.classList.remove('active'));
      currTarget.classList.add('active');
  }
    
  
  return (
    <main>
      <h1>Order your Volvo car online today</h1>
      <nav aria-label='Car types'>
        <ul className='car-types'>
          <li><a onClick={checkActive} className="car-type active">All ()</a></li>
          <li><a onClick={checkActive} className='car-type'>SUV ()</a></li>
          <li className='nav-hidden'><a onClick={checkActive} className='car-type'>Estate ()</a></li>
          <li className='nav-hidden'><a onClick={checkActive} className='car-type'>Saloon ()</a></li>
        </ul>
      </nav>
      <div className="slider">
        <ResponsiveSlider />
      </div>
    </main>
  );
}

export default Main;