import './App.css';
import Card from './components/Card'
import LogoSuv from './images/icon-suvs.svg'
import LogoSedan from './images/icon-sedans.svg'
import LogoLuxury from './images/icon-luxury.svg'
import Logo1 from './images/icon-suvs.svg'

function App() {
  return (
    <div className="cardsContainer">
      <Card 
        id="1" 
        type="SEDANS" 
        class="card-1 cards" 
        btnClass="btn btn-1"
        icon={LogoSedan}
        text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      />
      <Card 
        id="2" 
        type="SUVS" 
        class="card-2 cards"
        btnClass="btn btn-2" 
        icon={LogoSuv}
        text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      />
      <Card 
        id="3" 
        type="LUXURY" 
        class="card-3 cards"
        btnClass="btn btn-3" 
        icon={LogoLuxury}
        text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
      />
    </div>
  );
}

export default App;
