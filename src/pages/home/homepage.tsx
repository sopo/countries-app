import { useState, useReducer, } from "react";
import { Link, useParams } from "react-router-dom";
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
import Restore from '@/assets/icons/arrow.uturn.backward.svg?react'
import CreateCountryPopup from "./create-country-popup";
import { Country } from "@/components/cards/cards-data/country";
const HomePage: React.FC = () => {
  
  const [countriesNew, dispatch] = useReducer(countriesReducer, countriesData);
  const [sortByRating, setSortByRating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {lang} = useParams();
  const kaContent = {
    articleTitle: "ახალი სტატიები",
    addNewArticle: "დამატება"
  }
  const enContent = {
    articleTitle: "Latest articles",
    addNewArticle: "Add new article"
  }
  const content = lang === "en" ? enContent : kaContent
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
const handleRestoreClick = (id: number) => {
  dispatch({
    type: 'restore',
    id: id,
})
}
const handleCreateArticle = (data: Country) => {
  dispatch({
    type:'create',
    data:data
  })
  setIsOpen(false);
}
  const buttonTitle = sortByRating ? "Sort by least popular" : "Sort by most popular";
  return (
    <div>
      {isOpen && <CreateCountryPopup  isOpen={isOpen} handlePopupCloseClick={handlePopupCloseClick} handleCreateArticle={handleCreateArticle} /> }
      <Banner />
      <CardsSection>
        <SectionHeader>
          <h1 className="text-primary">{content.articleTitle}</h1>
          <Button title={buttonTitle} className="buttonSecondaryM" onClick={handleSortClick} />
          <Button title={content.addNewArticle} className="buttonSecondaryM" onClick={handleAddArticleClick}/>
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
                {country.isDeleted ? <Restore className="icon-l icon-secondary" onClick={() => {handleRestoreClick(country.id)}}/> : <DeleteIcon className="icon-l icon-secondary" onClick={() => handleDeleteClick(country.id)}/>} 
              </IconButton>
            </CardFooter>
          </CardContainer>
        ))}
      </CardsSection>
    </div>
  );
};
export default HomePage;
