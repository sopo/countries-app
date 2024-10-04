import countries from "../../static-data/cards-data";
import { useParams } from "react-router-dom";
import PageNotFound from "@/pages/page-not-found/views";
import ArticlePattern from "@/layouts/article/article-pattern";
import ArticleHeader from "@/layouts/article/aticle-header/article-header";
import ArticleBody from "@/layouts/article/article-body/article-body";
import ArticleBanner from "@/layouts/article/article-banner/article-banner";
import ArticleDetails from "@/layouts/article/article-details/article-details";
import ArticleFooter from "@/layouts/article/article-footer/article-footer";

const ExpandedCard: React.FC = () => {
  const { id } = useParams();
  const country = countries.find((country) => country.id === id);
  const countryNotFound = !country;

  if (countryNotFound) {
    return <PageNotFound />;
  } else {
    return (
      <>
      <ArticlePattern>
        <ArticleBanner bannerImageUrl={country.imageUrl}/>
        <ArticleHeader articleTitle={country.name} />
        <ArticleDetails text={`Capital: ${country.capital} • Population: ${country.population}`}/>
        <ArticleBody text={country.description} />
        <ArticleFooter />
      </ArticlePattern>
      {console.log(country.imageUrl)}
      </>
    );
  }
};

export default ExpandedCard;
