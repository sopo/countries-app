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
      <p className="secondary-text tag">{country.name}</p>
      <h3>{country.title}</h3>
      <p className="secondary-text info">{`${content.capital}: ${country.capital} • ${content.population}: ${country.population}`}</p>
    </div>
  );
}
export default CardContent;