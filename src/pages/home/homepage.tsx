import countries from "../../components/cards/cards-data/cards-data";
import Banner from "../../components/banner/banner";
import CardsSection from "../../components/cards/cards-section/cards-section";
import CardContainer from "../../components/cards/card";
import CardContent from "../../components/cards/card-content/card-content";
import CardHeader from "../../components/cards/card-header/card-header";
import CardFooter from "../../components/cards/card-footer/card-footer";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <Banner />

      <CardsSection>
       <Link to={`countries/${countries[0].id}`}>
        <CardContainer>
          <CardHeader />
          <CardContent country={countries[0]} />
          <CardFooter />
        </CardContainer>
        </Link>
        <Link to={`countries/${countries[1].id}`}>
        <CardContainer>
          <CardHeader />
          <CardContent country={countries[1]} />
          <CardFooter />
        </CardContainer>
        </Link>
        <Link to={`countries/${countries[2].id}`}>
        <CardContainer>
          <CardHeader />
          <CardContent country={countries[2]} />
          <CardFooter />
        </CardContainer>
        </Link>
      </CardsSection>
      
    </div>
  );
};
export default HomePage;
