import Banner from "../../components/banner";
import CardsSection from "../../components/cards/section";
import CardContainer from "../../components/cards/container";
import CardContent from "../../components/cards/content";
import CardHeader from "../../components/cards/header";
import CardFooter from "../../components/cards/footer";
const country = {
    name: "Tajikistan",
    population: 10590927,
    capital: "Dushanbe",
  };
const DefaultHome: React.FC = () => {
      return(
        <div>
        <Banner />
          <CardsSection>
            <CardContainer>
              <CardHeader />
              <CardContent country={country}/>
              <CardFooter />
            </CardContainer>
          </CardsSection>
          </div>
      )
}
export default DefaultHome;