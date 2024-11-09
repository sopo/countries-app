import { useState } from 'react';
import {
  deleteCountry,
  likeCountry,
  sortCountries,
} from '@/api/countries/get-countries';
import { Link, useParams, useSearchParams } from 'react-router-dom';
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
import { useMutation, useQuery } from '@tanstack/react-query';
import { Country } from '@/components/cards/cards-data/country';
const HomePage: React.FC = () => {
  // ენის მიხედვით ფილტრი
  const { lang } = useParams();
  const content = lang === 'en' ? cardsSectionSd.en : cardsSectionSd.ka;

  //პოპაპი გახსნა დახურვა
  const [isOpen, setIsOpen] = useState(false);
  const handleAddArticleClick = () => {
    setIsOpen(true);
  };
  const handlePopupCloseClick = () => {
    setIsOpen(false);
  };

  // ქარდის შეცვლის აიდი
  const [editCountryId, setEditCountryId] = useState<string | undefined>(
    undefined,
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') || 'asc';
  const sortButtonText = sort === 'rating'?'most Liked' : 'least Liked';
   const handleSortClick = () => {
     const searchParam = sort === "asc" ? "desc":"asc"
     setSearchParams({ sort: searchParam });
   };
  const { data:countries, isLoading, isError, refetch } = useQuery({
    queryKey: ['countries-list',sort],
    queryFn:()=>{
      console.log("fetching sort")
    return  sortCountries(sort)
    } ,
    
    retry: 0,
  });

  // ჰენდლერები
  const handleCreateArticle = () => {
    setIsOpen(false);
    refetch();
    // refetchCountries()
  };
  const {
    mutate: mutateDelete,
    status: statusDelete,
    isError: errorDelete,
  } = useMutation({ mutationFn: deleteCountry });
  const deleteLoading = statusDelete === 'pending';
  const handleDeleteClick = (id: string) => {
    mutateDelete(id, {
      onSuccess: () => {
        refetch();
        // refetchCountries()
      },
    });
  };
  const handleEditClick = (id: string) => {
    setIsOpen(true);
    setEditCountryId(id);
  };

  //like
  const { mutate: mutateLike } = useMutation({ mutationFn: likeCountry });
  const handleLikeClick = (id: string, rating: number) => {
    mutateLike(
      { id, rating: rating + 1 },
      {
        onSuccess: () => {
          refetch();
          // refetchCountries()
        },
      },
    );
  };

  return (
    <div>
      {isOpen && (
        <CreateCountryPopup
          isOpen={isOpen}
          handlePopupCloseClick={handlePopupCloseClick}
          handleCreateArticle={handleCreateArticle}
          id={editCountryId}
        />
      )}
      <Banner />
      <CardsSection>
        <SectionHeader>
          <h1 className="text-primary">{content.articleTitle}</h1>

          <Button
            title={`${sortButtonText}`}
            className="buttonSecondaryM"
            onClick={() => handleSortClick()}
          />
          <Button
            title={content.addNewArticle}
            className="buttonSecondaryM"
            onClick={handleAddArticleClick}
          />
        </SectionHeader>
        {countries && console.log('yes :', countries)}
        {isError && <p>error</p>}
        {isLoading && <p>loading...</p>}
        {(countries)?.map((country: Country) => (
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
              <IconButton disabled={deleteLoading}>
                <DeleteIcon
                  className="icon-l icon-secondary"
                  onClick={() => handleDeleteClick(country.id)}
                />
                {errorDelete && <p>Couldn't delete</p>}
              </IconButton>
            </CardFooter>
          </CardContainer>
        ))}
      </CardsSection>
    </div>
  );
};
export default HomePage;
