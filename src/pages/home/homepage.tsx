import { useState, useReducer } from "react";
import { Link } from "react-router-dom";
import countriesReducer from "./countries-reducer";
import countriesData from "../../components/cards/cards-data/cards-data";
import Banner from "../../components/banner/banner";
import CardsSection from "@/components/cards/cards-section/cards-section";
import CardContainer from "../../components/cards/card";
import CardContent from "../../components/cards/card-content/card-content";
import CardHeader from "../../components/cards/card-header/card-header";
import CardFooter from "../../components/cards/card-footer/card-footer";
import RatingSection from "@/components/rating/rating-section";
import Button from "@/components/button/button";
import SectionHeader from "@/components/cards/cards-section/section-header/section-header";

const HomePage: React.FC = () => {
  const [countriesNew, dispatch] = useReducer(countriesReducer, countriesData);
  const [sortByRating, setSortByRating] = useState(false);

  const handleLikeClick = (id: number) => {
    dispatch({
      type: 'like',
      id: id,
    })
  };

  const handleSortClick = () => {
    const newSort = !sortByRating;
    setSortByRating(newSort);
    dispatch({
      type: 'sort',
      newSort: newSort,

    })
  };
  const buttonTitle = sortByRating ? "Sort by least popular" : "Sort by most popular";
  return (
    <div>
      <Banner />
      <CardsSection>
        <SectionHeader>
          <h1 className="text-primary">Latest articles</h1>
          <Button title={buttonTitle} className="buttonSecondaryM" onClick={handleSortClick} />
        </SectionHeader>
        {countriesNew.map((country) => (
          <CardContainer key={country.id}>
            <Link to={`countries/${country.id}`}>
              <CardHeader cardImageUrl={country.imageUrl} />
              <CardContent country={country} />
            </Link>
            <CardFooter>
              <RatingSection
                rating={country.rating}
                onClick={() => handleLikeClick(country.id)}
              />
            </CardFooter>
          </CardContainer>
        ))}
      </CardsSection>
    </div>
  );
};
export default HomePage;
