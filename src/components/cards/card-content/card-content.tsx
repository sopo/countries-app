import styles from "./card-content.module.css"
interface Country{
  name: string; 
  title: string;
  population: number; 
  capital: string;
}
const CardContent: React.FC<{ country: Country }> = ({country}) => {
  return (
    <div className={styles.cardContent}>
      <p className="secondary-text tag">{country.name}</p>
      <h3>{country.title}</h3>
      <p className="secondary-text info">{`Capital: ${country.capital} • Population: ${country.population}`}</p>
    </div>
  );
}
export default CardContent;