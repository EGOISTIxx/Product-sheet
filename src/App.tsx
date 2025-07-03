import reactLogo from './assets/react.svg'
import './App.css'
import ProductCard from './components/ProductCard/ProductCard'

function App() {

  return (
    <div className="cards-greed">
      <ProductCard
        title="Товар 1"
        origin="Россия"
        price={34900}
        currency="RUB"
        imageUrl={reactLogo}
      />
      <ProductCard
        title="Товар 2"
        origin="Америка"
        price={34900}
        currency="USD"
        imageUrl={reactLogo}
      />
    </div>
  )
}

export default App
