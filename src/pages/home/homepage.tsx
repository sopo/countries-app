import { useEffect, useRef, useState } from 'react';
import {
  deleteCountry,
  likeCountry,
  getCountries,
} from '@/api/countries/get-countries';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import cardsSectionSd from './static-data/cards-section-sd';
import Banner from '../../components/banner/banner';
import CardsSection from '@/components/cards/cards-section/cards-section';
import Button from '@/components/button/button';
import SectionHeader from '@/components/cards/cards-section/section-header/section-header';
import CreateCountryPopup from './create article/create-country-popup';
import { useInfiniteQuery, useMutation } from '@tanstack/react-query';
import DeleteIcon from '@/assets/icons/trash.svg?react';
import EditIcon from '@/assets/icons/pencil.svg?react';
import { useVirtualizer } from '@tanstack/react-virtual';
import IconButton from '@/components/button/icon-button/icon-button';
import CardContainer from '@/components/cards/card';
import CardContent from '@/components/cards/card-content/card-content';
import CardFooter from '@/components/cards/card-footer/card-footer';
import CardHeader from '@/components/cards/card-header/card-header';
import RatingSection from '@/components/rating/rating-section';

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
  const sortButtonText = sort === 'asc' ? 'most Liked' : 'least Liked';
  const handleSortClick = () => {
    const searchParam = sort === 'asc' ? 'desc' : 'asc';
    setSearchParams({ sort: searchParam });
  };

  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ['countries-list', sort],
      queryFn: (ctx) => getCountries(sort, ctx.pageParam),
      getNextPageParam: (lastGroup) => lastGroup.nextOffset,
      initialPageParam: 1,
    });

  const allRows = data ? data.pages.flatMap((d) => d.rows) : [];

  const parentRef = useRef(null);
  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? allRows.length + 1 : allRows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 433,
    overscan: 6,
  });

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();

    if (!lastItem) {
      return;
    }

    if (
      lastItem.index >= allRows.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allRows.length,
    isFetchingNextPage,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    rowVirtualizer.getVirtualItems(),
    rowVirtualizer,
  ]);

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
        },
      },
    );
  };

  console.log(allRows);

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
      </CardsSection>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <div
          // ვიუპორტი
          ref={parentRef}
          className="List"
          style={{
            height: `500px`,
            width: '400px',
            overflow: 'auto',
          }}
        >
          <div
            //მთლიანი კონტეინერი
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: '100%',
              position: 'relative',
            }}
          >
            {rowVirtualizer.getVirtualItems().map((item) => {
              const isLoaderRow = item.index > allRows.length - 1;
              const country = allRows[item.index];
              if (!country) {
                return null;
              }
              return (
                <div
                  key={item.key}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${item.size}px`,
                    transform: `translateY(${item.start}px)`,
                  }}
                >
                  {isLoaderRow ? (
                    hasNextPage ? (
                      'Loading more...'
                    ) : (
                      'Nothing more to load'
                    )
                  ) : (
                    <CardContainer key={country.id}>
                      <Link to={`countries/${country.id}`}>
                        <CardHeader cardImageUrl={country.imageUrl} />
                        <CardContent country={country} />
                      </Link>
                      <CardFooter>
                        <RatingSection
                          rating={country.rating}
                          onClick={() =>
                            handleLikeClick(country.id, country.rating)
                          }
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
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
