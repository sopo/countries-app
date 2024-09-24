import './card-content.css'
const country = {
  name: "Tajikistan",
  population: 10590927,
  capital: "Dushanbe",
};
export default function CardContent() {
  return (
    <div className='card-content'>
      <h2 className="primary-text title-s">{country.name}</h2>
      <p className="secondary-text paragraph-m">
        Population: {country.population}
      </p>
      <p className="secondary-text paragraph-m">Capital: {country.capital}</p>
    </div>
  );
}
