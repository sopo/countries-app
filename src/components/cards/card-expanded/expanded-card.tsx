import countriesDataEn from "../cards-data/cards-data";
import countriesDataGeo from '../cards-data/cards-data-geo'
import { useParams } from "react-router-dom";
import PageNotFound from "@/pages/page-not-found/page-not-found";
import Article from '@/layouts/article/article'
import ArticleHeader from "@/layouts/article/aticle-header/article-header";
import ArticleBody from "@/layouts/article/article-body/article-body";
import ArticleBanner from "@/layouts/article/article-banner/article-banner";
import ArticleDetails from "@/layouts/article/article-details/article-details";
import ArticleFooter from "@/layouts/article/article-footer/article-footer";
const ExpandedCard: React.FC = () => {
  const { id, lang } = useParams();
  const countries = lang === "en" ? countriesDataEn : countriesDataGeo;
  console.log("language: ",lang)
  const kaContent = {
    capital: 'დედაქალაქი',
    population: 'მოსახლეობა'
  }
  const enContent = {
    capital: 'Capital',
    population: 'Population'
  }
  const content = lang === 'en' ? enContent : kaContent
  const country = countries.find((country) => country.id.toString() === id);
  const countryNotFound = !country;

  if (countryNotFound) {
    return <PageNotFound />;
  } else {
    return (
      <>
      <Article>
        <ArticleBanner bannerImageUrl={country.imageUrl}/>
        <ArticleHeader articleTitle={country.name} />
        <ArticleDetails text={`${content.capital}: ${country.capital} • ${content.population}: ${country.population}`}/>
        <ArticleBody text={country.description} />
        <ArticleFooter />
      </Article>
      </>
    );
  }
};

export default ExpandedCard;
