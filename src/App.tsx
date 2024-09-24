import './global-css/containers.css'
import Header from "./components/header/Header";
import CardsSection from './components/card/cards-section';
import Card from './components/card/Card';
import Banner from "./components/banner/Banner";
import CardHeader from './components/card/card-header/CardHeader';
import CardContent from './components/card/card-content/card-content';
import CardFooter from './components/card/card-footer/card-footer';

function App() {
  return (
    <>
      <div>
        
        <Header />
        <Banner />
        <CardsSection />
         
      </div>
    </>
  );
}

export default App;
