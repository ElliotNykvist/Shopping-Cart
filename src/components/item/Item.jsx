import "./Item.css";

const Item = () => {
  return (
    <div className="cartItem">
      <div className="item-container">
        <p className='car-type'>SUV</p>
        <h3><strong>EX30</strong> plug-in hybrid</h3>
        <div className='img-container'>
          <img src="./volvo.jpg"></img>
        </div>
        <div className="item-price">
          <div className="buttons">
            <button className="add-To-Cart">Add To Cart</button>
          </div>
          <p className="buying-price">Price <strong>$35,795</strong></p>
        </div>
      </div>
    </div>
  )
}

export default Item;
