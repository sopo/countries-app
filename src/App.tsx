import "@/global-css/containers.css";
import Layout from "#/layout";
import Banner from "#/banner";
import CardsSection from "#/cards/section";
import CardContainer from "#/cards/container";
import CardHeader from "#/cards/header";
import CardContent from "#/cards/content";
import CardFooter from "#/cards/footer";

const country = {
  name: "Tajikistan",
  population: 10590927,
  capital: "Dushanbe",
};

const App: React.FC = () => {
  return (
    <>
      <div>
        <Layout>
          <Banner />
          <CardsSection>
            <CardContainer>
              <CardHeader />
              <CardContent country={country}/>
              <CardFooter />
            </CardContainer>
          </CardsSection>
        </Layout>
      </div>
    </>
  );
};

export default App;
