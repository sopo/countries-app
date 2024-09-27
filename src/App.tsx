import "./global-css/containers.css";
import Header from "./components/header";
import Banner from "./components/banner";
import CardsSection from "./components/cards/section";
import CardContainer from "./components/cards/container";
import CardHeader from "./components/cards/header";
import CardContent from "./components/cards/content";
import CardFooter from "./components/cards/footer";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <CardsSection>
          <CardContainer>
            <CardHeader />
            <CardContent />
            <CardFooter />
          </CardContainer>
        </CardsSection>
      </div>
    </>
  );
}

export default App;
