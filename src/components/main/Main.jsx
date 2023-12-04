import './Main.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Main = () => {
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