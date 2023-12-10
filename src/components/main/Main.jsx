import ResponsiveSlider from '../responsiveSlider/ResponsiveSlider';
import "./Main.css";

const Main = () => {
  
  return (
    <main>
      <h1>Order your Volvo car online today</h1>
      <nav aria-label='Car types'>
        <ul className='car-types'>
          <li><a className='active'>All ()</a></li>
          <li><a>SUV ()</a></li>
          <li><a>Crossover ()</a></li>
          <li className='nav-hidden'><a>Estate ()</a></li>
          <li className='nav-hidden'><a>Saloon ()</a></li>
        </ul>
      </nav>
      <div className="slider">
        <ResponsiveSlider />
      </div>
    </main>
  );
}

export default Main;