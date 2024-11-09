import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from '@/pages/page-not-found/page-not-found';
import Article from '@/layouts/article/article';
import ArticleHeader from '@/layouts/article/aticle-header/article-header';
import ArticleBanner from '@/layouts/article/article-banner/article-banner';
import ArticleDetails from '@/layouts/article/article-details/article-details';
import ArticleFooter from '@/layouts/article/article-footer/article-footer';
import { Country } from '../cards-data/country';
import { openCountry } from '@/api/countries/get-countries';
import { useQuery } from '@tanstack/react-query';
const ExpandedCard: React.FC = () => {
  const kaContent = {
    capital: 'დედაქალაქი',
    population: 'მოსახლეობა',
  };
  const enContent = {
    capital: 'Capital',
    population: 'Population',
  };
  const { id, lang } = useParams();
  const [country, setCountry] = useState<Country | undefined>(undefined);
  const { data } = useQuery({
    queryKey: ['country', id],
    queryFn: () => openCountry({ id: id! }),
    enabled: !!id,
    retry: 0,
  });
  useEffect(() => {
    if (data) {
      setCountry(data);
    }
  }, [data]);
  const content = lang === 'en' ? enContent : kaContent;
  const countryNotFound = !country;

  if (countryNotFound) {
    return <PageNotFound />;
  } else {
    return (
      <>
        <Article>
          <ArticleBanner bannerImageUrl={country.imageUrl} />
          <ArticleHeader
            articleTitle={lang === 'en' ? country.name.en : country.name.ka}
          />
          <ArticleDetails
            text={`${content.capital}: ${lang === 'en' ? data?.capital.en : data?.capital.ka}  • ${content.population}: ${data?.population}`}
          />

          <ArticleFooter />
        </Article>
      </>
    );
  }
};

export default ExpandedCard;
