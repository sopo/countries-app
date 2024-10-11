import { Country } from "../cards-data/country";
import styles from "./card-content.module.css"

const CardContent: React.FC<{ country: Country; className?: string}> = ({country, className}) => {
  return (
    <div className={`${className} ${styles.cardContent}`}>
      <p className="secondary-text tag">{country.name}</p>
      <h3>{country.title}</h3>
      <p className="secondary-text info">{`Capital: ${country.capital} • Population: ${country.population}`}</p>
    </div>
  );
}
export default CardContent;