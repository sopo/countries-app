import countries from "@/components/cards/cards-data/cards-data";
import { Country } from "@/components/cards/cards-data/country";
type Action = { type: "like"; id: number } 
| { type: "sort"; newSort: boolean }
| { type: "delete"; id: number; }
| { type: "create"; data:any}
;
let nextId = countries.length +1;
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
      return [...countries].sort((a, b) => {
        // if(a.isDeleted && !b.isDeleted){
        //   return 1;
        // }
        // if(!a.isDeleted && b.isDeleted){
        //   return -1;
        // }
        if(a.isDeleted && b.isDeleted){
          return 0;
        }
        return  action.newSort ? b.rating - a.rating : a.rating - b.rating
      }
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
    case "create": {
      return [...countries, {
        id: nextId++,
        imageUrl: 'https://images.unsplash.com/photo-1673179559805-8dfbf64e10d4?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 0,
        isDeleted: false,
        ...action.data
      }]
    }
    default:
      return countries;
  }
}
export default countriesReducer;
