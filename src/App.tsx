import "./global-css/containers.css";
import Header from "./components/header/header.tsx";
import Banner from "./components/banner/banner.tsx";
import CardsSection from "./components/cards/cards-section/cards-section";
import Card from "./components/cards/card-container/card";
import CardHeader from "./components/cards/card-header/card-header";
import CardContent from "./components/cards/card-content/card-content";
import CardFooter from "./components/cards/card-footer/card-footer";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <CardsSection>
          <Card>
            <CardHeader />
            <CardContent />
            <CardFooter />
          </Card>
        </CardsSection>
      </div>
    </>
  );
}

export default App;
