import axios from 'axios';

async function seed() {
  const { data } = await axios.get('https://restcountries.com/v3.1/all');
  for (const country of data) {
    await axios.post('http://localhost:3000/countries', {
      name: {
        en: country.name.common,
        ka: country.name.common,
      },
      capital: {
        en: country.capital ? country.capital[0] : 'No Capital',
        ka: country.capital ? country.capital[0] : 'No Capital',
      },

      population: country.population || 0,
    });
  }
}
seed();
