import "@/global-css/containers.css";
import Header from "#/header";
import Banner from "#/banner";
import CardsSection from "#/cards/section";
import CardContainer from "#/cards/container";
import CardHeader from "#/cards/header";
import CardContent from "#/cards/content";
import CardFooter from "#/cards/footer";

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
