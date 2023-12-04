import './Main.css'

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
    </main>

  )
}

export default Main;