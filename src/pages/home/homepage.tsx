import { useState } from 'react';
import {
  getCountries,
  deleteCountry,
  likeCountry,
} from '@/api/countries/get-countries';
import { Link, useParams } from 'react-router-dom';
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

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['countries-list'],
    queryFn: getCountries,
    retry: 0,
  });

  // ჰენდლერები
  const handleCreateArticle = () => {
    setIsOpen(false);
    refetch();
  };
  const { mutate: mutateDelete } = useMutation({ mutationFn: deleteCountry });
  const handleDeleteClick = (id: string) => {
    mutateDelete(id, {
      onSuccess: () => {
        refetch()
      }
    });
   
  };
  const handleEditClick = (id: string) => {
    setIsOpen(true);
    setEditCountryId(id);
  };
  const { mutate: mutateLike } = useMutation({ mutationFn: likeCountry });
  const handleLikeClick = (id: string, rating: number) => {
    mutateLike(
      { id, rating: rating + 1 },
      {
        onSuccess: () => {
          refetch();
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
            title={content.addNewArticle}
            className="buttonSecondaryM"
            onClick={handleAddArticleClick}
          />
        </SectionHeader>
        {isError && <p>error</p>}
        {isLoading && <p>loading...</p>}
        {data?.map((country) => (
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
