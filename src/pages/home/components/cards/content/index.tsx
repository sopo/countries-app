import styles from "./content.module.css"
interface Country{
  name: string; 
  population: number; 
  capital: string;
}
const CardContent: React.FC<{ country: Country }> = ({country}) => {
  return (
    <div className={styles.cardContent}>
      <h2 className="primary-text title-s">{country.name}</h2>
      <p className="secondary-text paragraph-m">
        Population: {country.population}
      </p>
      <p className="secondary-text paragraph-m">Capital: {country.capital}</p>
    </div>
  );
}
export default CardContent;