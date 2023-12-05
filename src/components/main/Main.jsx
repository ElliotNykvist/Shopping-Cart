import './Main.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Main = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <main>
      <h1>Order your Volvo car online today</h1>
        <nav aria-label='Car types'>
          <ul>
            <li><a className='active'>All ()</a></li>
            <li><a>SUV ()</a></li>
            <li><a>Crossover ()</a></li>
            <li><a>Estate ()</a></li>
            <li><a>Saloon ()</a></li>
          </ul>
        </nav>
        <div className="slider">
          <div className="cards">
          <Carousel responsive={responsive}>
            <Card />
          </Carousel>
          </div>
          <div className="prev-next">
            <button><IoIosArrowBack className="arrow"/></button>
            <button><IoIosArrowForward className="arrow"/></button>
          </div>
        </div>
        
    </main>

  )
}

export default Main;