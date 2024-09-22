import "./Card.css";
const country = {
  name: "Tajikistan",
  population: 10590927,
  capital: "Dushanbe",
};
export default function Card() { 
  return (
    <div className="container-xl">
      <p className="title-m margin-vertical-xl">Popular destinations to visit</p>
      <div className="card border-radius-xl padding-xl">
        <h2 className="primary-text title-s">{country.name}</h2>
        <p className="secondary-text paragraph-m">Population: {country.population}</p>
        <p className="secondary-text paragraph-m">Capital: {country.capital}</p>
      </div>
    </div>
  );
}
