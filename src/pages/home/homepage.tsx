import { useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import countriesReducer from './countries-reducer';
import cardsSectionSd from './static-data/cards-section-sd';
import Banner from '../../components/banner/banner';
import CardsSection from '@/components/cards/cards-section/cards-section';
import CardContainer from '../../components/cards/card';
import CardContent from '../../components/cards/card-content/card-content';
import CardHeader from '../../components/cards/card-header/card-header';
import CardFooter from '../../components/cards/card-footer/card-footer';
import RatingSection from '@/components/rating/rating-section';
import Button from '@/components/button/button';
import SectionHeader from '@/components/cards/cards-section/section-header/section-header';
import IconButton from '@/components/button/icon-button/icon-button';
import DeleteIcon from '@/assets/icons/trash.svg?react';
import EditIcon from '@/assets/icons/pencil.svg?react';
import CreateCountryPopup from './create article/create-country-popup';
import { Country } from '@/components/cards/cards-data/country';

const HomePage: React.FC = () => {
  // კონტენტის გაფილტვრა ენის მიხედვით
  const { lang } = useParams();
  const content = lang === 'en' ? cardsSectionSd.en : cardsSectionSd.ka;

  // რეიტინგის მიხედვით დასორტვა
  const [sortByRating, setSortByRating] = useState(false);
  const buttonTitle = sortByRating
    ? `${content.sort.least}`
    : `${content.sort.most}`;

  //პოპაპის გახსნა/დახურვა
  const [isOpen, setIsOpen] = useState(false);
  const handleAddArticleClick = () => {
    setIsOpen(true);
  };
  const handlePopupCloseClick = () => {
    setIsOpen(false);
  };
  //useEffect
  const refreshData = () => {
    return axios.get('http://localhost:3000/countries').then((response) => {
      dispatch({
        type: 'load',
        data: response.data,
      });
    });
  };
  useEffect(() => {
    refreshData();
  }, []);
  const handleCreateArticle = (data: Omit<Country, 'id'>) => {
    axios
      .post('http://localhost:3000/countries', data)
      .then((response) => {
        dispatch({
          type: 'create',
          data: response.data,
        });
      })

      .finally(() => {
        setIsOpen(false);
      });
  };

  const handleDeleteClick = (id: string) => {
    axios.delete(`http://localhost:3000/countries/${id}`).then(() => {
      dispatch({
        type: 'delete',
        id: id,
      });
    });
  };
  const handleEditClick = (id: string) => {
    setIsOpen(true);
    console.log(id);
  };
  const handleLikeClick = (id: string, rating: number) => {
    axios
      .patch(`http://localhost:3000/countries/${id}`, {
        rating: rating + 1,
      })
      .then(() => {
        dispatch({
          type: 'like',
          id: id,
        });
      });
  };
  //რედიუსერი
  const [countriesNew, dispatch] = useReducer(countriesReducer, []);
  // const handleLikeClick = (id: number) => {
  //   dispatch({
  //     type: 'like',
  //     id: id,
  //   });
  // };
  const handleSortClick = () => {
    const newSort = !sortByRating;
    setSortByRating(newSort);
    dispatch({
      type: 'sort',
      newSort: newSort,
    });
  };
  // const handleDeleteClick = (id: number) => {
  //   dispatch({
  //     type: 'delete',
  //     id: id,
  //   });
  // };

  // const handleCreateArticle = (data: Country) => {
  //   dispatch({
  //     type: 'create',
  //     data: data,
  //   });
  //   setIsOpen(false);
  // };

  return (
    <div>
      {isOpen && (
        <CreateCountryPopup
          isOpen={isOpen}
          handlePopupCloseClick={handlePopupCloseClick}
          handleCreateArticle={handleCreateArticle}
        />
      )}
      <Banner />

      <CardsSection>
        <SectionHeader>
          <h1 className="text-primary">{content.articleTitle}</h1>
          <Button
            title={buttonTitle}
            className="buttonSecondaryM"
            onClick={handleSortClick}
          />
          <Button
            title={content.addNewArticle}
            className="buttonSecondaryM"
            onClick={handleAddArticleClick}
          />
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
                onClick={() => handleLikeClick(country.id, country.rating)}
              />
              <IconButton>
                <EditIcon
                  className="icon-l icon-secondary"
                  onClick={() => handleEditClick(country.id)}
                />
              </IconButton>
              <IconButton>
                <DeleteIcon
                  className="icon-l icon-secondary"
                  onClick={() => handleDeleteClick(country.id)}
                />
              </IconButton>
            </CardFooter>
          </CardContainer>
        ))}
      </CardsSection>
    </div>
  );
};
export default HomePage;
