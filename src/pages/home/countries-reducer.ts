import { Country } from "@/components/cards/cards-data/country";
type Action = { type: "like"; id: number } 
| { type: "sort"; newSort: boolean }
| { type: "delete"; id: number; }
;

function countriesReducer(countries: Country[], action: Action): Country[] {
  switch (action.type) {
    case "like": {
      return countries.map((country) =>
        country.id === action.id
          ? { ...country, rating: country.rating + 1 }
          : country
      );
    }
    case "sort": {
      return [...countries].sort((a, b) =>
        action.newSort ? b.rating - a.rating : a.rating - b.rating
      );
    }
    case "delete": {
      const updatedCountries =  countries.map((country) => 
        country.id === action.id 
      ? {...country, isDeleted: true}
      : country
      );

      const sortedCountries = updatedCountries.sort((a, b) => {
        if(a.isDeleted === b.isDeleted){
          return 0;
        }return a.isDeleted ? 1:-1; 
      })
     
      return sortedCountries;

      //return countries.filter((country) => country.id !== action.id  )
    }
    default:
      return countries;
  }
}
export default countriesReducer;
