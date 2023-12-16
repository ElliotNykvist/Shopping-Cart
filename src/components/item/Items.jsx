import "./Items.css";

const Item = () => {
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
    </div>
  )
}