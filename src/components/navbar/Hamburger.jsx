
const Hamburger  = () => {
  return (
    <>
    <label className="hamburger">
    <input type="checkbox"></input>
    </label>
    <aside className="sidebar">
      <nav>
      <ul className="middle">
          <li>
            <a>Our cars</a>
          </li>
          <li>
            <a>Shop</a>
          </li>
          <li>
            <a>Owners</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </nav>
    </aside>
    </>

  )
}

export default Hamburger;