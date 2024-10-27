import countriesData from "../cards-data/cards-data";
import { useParams } from "react-router-dom";
import PageNotFound from "@/pages/page-not-found/page-not-found";
import Article from "@/layouts/article/article";
import ArticleHeader from "@/layouts/article/aticle-header/article-header";
import ArticleBody from "@/layouts/article/article-body/article-body";
import ArticleBanner from "@/layouts/article/article-banner/article-banner";
import ArticleDetails from "@/layouts/article/article-details/article-details";
import ArticleFooter from "@/layouts/article/article-footer/article-footer";
const ExpandedCard: React.FC = () => {
  const kaContent = {
    capital: "დედაქალაქი",
    population: "მოსახლეობა",
  };
  const enContent = {
    capital: "Capital",
    population: "Population",
  };
  const { id, lang } = useParams();
  //const filteredCountriesData = lang === "en" ? countriesData.en : countriesData.ka
  const content = lang === "en" ? enContent : kaContent;
  const country = countriesData.find((country) => country.id.toString() === id);
  const countryNotFound = !country;

  if (countryNotFound) {
    return <PageNotFound />;
  } else {
    return (
      <>
        <Article>
          <ArticleBanner bannerImageUrl={country.imageUrl} />
          <ArticleHeader
            articleTitle={lang === "en" ? country.name.en : country.name.ka}
          />
          <ArticleDetails
            text={`${content.capital}: ${lang === "en" ? country.capital.en : country.capital.ka}  • ${content.population}: ${country.population}`}
          />
          <ArticleBody
            text={`${lang === "en" ? country.description.en : country.description.ka}`}
          />
          <ArticleFooter />
        </Article>
      </>
    );
  }
};

export default ExpandedCard;
