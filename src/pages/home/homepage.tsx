import { useState } from "react";
import countriesData from "../../components/cards/cards-data/cards-data";
import Banner from "../../components/banner/banner";
import CardsSection from "@/components/cards/cards-section/cards-section";
import CardContainer from "../../components/cards/card";
import CardContent from "../../components/cards/card-content/card-content";
import CardHeader from "../../components/cards/card-header/card-header";
import CardFooter from "../../components/cards/card-footer/card-footer";
import { Link } from "react-router-dom";
import IconButton from "@/components/button/icon-button/icon-button";

const HomePage: React.FC = () => {
  const [countries] = useState(countriesData);
  return (
    <div>
      <Banner />
      <CardsSection>
        {countries.map((country) => (
        
            <CardContainer key={country.id}>
                <Link  to={`countries/${country.id}`}>
              <CardHeader />
              <CardContent country={country} />
              </Link>
              <CardFooter />
              <IconButton />
            </CardContainer>
         
        ))}
      </CardsSection>
    </div>
  );
};
export default HomePage;
