import { Country } from '@/components/cards/cards-data/country';
type Action =
  | { type: 'load'; data: Country[] }
  | { type: 'edit'; data: Country }
  | { type: 'like'; id: string }
  | { type: 'sort'; newSort: boolean }
  | { type: 'delete'; id: string }
  | { type: 'restore'; id: string }
  | { type: 'create'; data: Country };

function countriesReducer(countriesData: Country[], action: Action): Country[] {
  switch (action.type) {
    case 'like': {
      return countriesData.map((country) =>
        country.id === action.id
          ? { ...country, rating: country.rating + 1 }
          : country,
      );
    }
    case 'load': {
      return action.data;
    }
    case 'edit': {
      return countriesData.map((country) => {
        if(country.id === action.data.id){
          return action.data
        }else{
          return country
        }
      })
      
    }
    case 'sort': {
      return [...countriesData].sort((a, b) => {
        return action.newSort ? b.rating - a.rating : a.rating - b.rating;
      });
    }
    case 'delete': {
      const updatedCountries = countriesData.filter(
        (country) => country.id !== action.id,
      );
      return updatedCountries;
    }
    case 'create': {
      return [
        ...countriesData,
        {
          ...action.data,
        },
      ];
    }

    default:
      return countriesData;
  }
}
export default countriesReducer;
