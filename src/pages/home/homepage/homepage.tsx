import countries from "../components/cards/section/static-data/cards-data";
import Banner from "../components/banner";
import CardsSection from "../components/cards/section/views/default";
import CardContainer from "../components/cards/section/container/view";
import CardContent from "../components/cards/section/container/content";
import CardHeader from "../components/cards/section/container/header";
import CardFooter from "../components/cards/section/container/footer";
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
