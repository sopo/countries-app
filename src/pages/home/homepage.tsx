import { useState, useReducer, } from "react";
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
import IconButton from "@/components/button/icon-button/icon-button";
import DeleteIcon from '@/assets/icons/trash.svg?react';
import CreateCountryPopup from "./create-country-popup";
const HomePage: React.FC = () => {
  const [countriesNew, dispatch] = useReducer(countriesReducer, countriesData);
  const [sortByRating, setSortByRating] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const handleAddArticleClick = () => {
    setIsOpen(true);
  }
  const handlePopupCloseClick =() => {
    setIsOpen(false)
  }
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
  const handleDeleteClick = (id: number) => {
    dispatch({
      type: 'delete',
      id: id,
  })
};
const handleCreateArticle = (data:any) => {
  dispatch({
    type:'create',
    data:data
  })
  setIsOpen(false);
  // e.preventDefault()
  // const formData = new FormData(e.currentTarget);
  // const countryObj = {}
  // for(const [key, value] of formData){
  //   countryObj[key] = value;
   
  // }
  // console.log(formData)
  // dispatch({
  //   type: 'create',
  
 
  // })
  // setIsOpen(false)
}
  const buttonTitle = sortByRating ? "Sort by least popular" : "Sort by most popular";
  return (
    <div>
      <CreateCountryPopup  isOpen={isOpen} handlePopupCloseClick={handlePopupCloseClick} handleCreateArticle={handleCreateArticle} />
      <Banner />
      <CardsSection>
        <SectionHeader>
          <h1 className="text-primary">Latest articles</h1>
          <Button title={buttonTitle} className="buttonSecondaryM" onClick={handleSortClick} />
          <Button title="Add new article" className="buttonSecondaryM" onClick={handleAddArticleClick}/>
        </SectionHeader>
        {countriesNew.map((country) => (
          <CardContainer key={country.id}>
            <Link to={`countries/${country.id}`}>
              <CardHeader className={country.isDeleted ? "inactive" : ""} cardImageUrl={country.imageUrl} />
              <CardContent className={country.isDeleted ? "inactive" : ""}  country={country} />
            </Link>
            <CardFooter>
              <RatingSection
                rating={country.rating}
                onClick={() => handleLikeClick(country.id)}
              />
              <IconButton >
                {country.isDeleted ? <p>Restore</p> : <DeleteIcon className="icon-l icon-secondary" onClick={() => handleDeleteClick(country.id)}/>} 
              </IconButton>
            </CardFooter>
          </CardContainer>
        ))}
      </CardsSection>
    </div>
  );
};
export default HomePage;
