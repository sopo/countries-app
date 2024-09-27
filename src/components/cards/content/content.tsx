import styles from "./content.module.css"
const country = {
  name: "Tajikistan",
  population: 10590927,
  capital: "Dushanbe",
};
const CardContent: React.FC = () => {
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