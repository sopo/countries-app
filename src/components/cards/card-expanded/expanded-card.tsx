import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from '@/pages/page-not-found/page-not-found';
import Article from '@/layouts/article/article';
import ArticleHeader from '@/layouts/article/aticle-header/article-header';
import ArticleBanner from '@/layouts/article/article-banner/article-banner';
import ArticleDetails from '@/layouts/article/article-details/article-details';
import ArticleFooter from '@/layouts/article/article-footer/article-footer';
import { Country } from '../cards-data/country';

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
  useEffect(() => {
    axios.get(`http://localhost:3000/countries/${id}`).then((response) => {
      setCountry(response.data);
    });
  }, [id, lang]);
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
            text={`${content.capital}: ${lang === 'en' ? country.capital.en : country.capital.ka}  • ${content.population}: ${country.population}`}
          />
         
          <ArticleFooter />
        </Article>
      </>
    );
  }
};

export default ExpandedCard;
