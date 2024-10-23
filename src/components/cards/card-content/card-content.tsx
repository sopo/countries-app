import { Country } from "../cards-data/country";
import styles from "./card-content.module.css"
import { useParams } from "react-router-dom";

const CardContent: React.FC<{ country: Country; className?: string}> = ({country, className}) => {
  const {lang} = useParams();
  const kaContent = {
    capital: "დედაქალაქი",
    population: "მოსახლეობა",
  }
  const enContent = {
    capital: "Capital",
    population: "Population",
  }
const content = lang === "en" ? enContent : kaContent
  return (
    <div className={`${className} ${styles.cardContent}`}>
      <p className="secondary-text tag">{
      lang === "en" ? country.nameEn : country.nameKa}</p>
      <h3>{lang === "en" ? country.titleEn : country.titleKa}</h3>
      <p className="secondary-text info">{`${content.capital}: ${lang === "en" ? country.capitalEn : country.capitalKa} • ${content.population}: ${country.population}`}</p>
    </div>
  );
}
export default CardContent;