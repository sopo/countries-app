import countriesData from '@/components/cards/cards-data/cards-data'
import { Country } from "@/components/cards/cards-data/country";
// რედუსერს უნდა ჩავაწოდო რო დეითა და დაბრუნებული კონტენტი გაიფილტროს ჰოუმზე
type Action =
  | { type: "like"; id: number }
  | { type: "sort"; newSort: boolean }
  | { type: "delete"; id: number }
  | { type: "restore"; id: number }
  | { type: "create"; data: Country };
 
let nextId = countriesData.length + 1;

function countriesReducer(countriesData: Country[], action: Action): Country[] {
 
  switch (action.type) {
    case "like": {
      return countriesData.map((country) =>
        country.id === action.id
          ? { ...country, rating: country.rating + 1 }
          : country
      );
    }
    case "sort": {
      return [...countriesData].sort((a, b) => {
        if (a.isDeleted && b.isDeleted) {
          return 0;
        }
        if (a.isDeleted) {
          return 1;
        }
        if (b.isDeleted) {
          return -1;
        }
        return action.newSort ? b.rating - a.rating : a.rating - b.rating;
      });
    }
    case "delete": {
      const updatedCountries = countriesData.map((country) =>
        country.id === action.id ? { ...country, isDeleted: true } : country
      );

      const sortedCountries = updatedCountries.sort((a, b) => {
        if (a.isDeleted === b.isDeleted) {
          return 0;
        }
        return a.isDeleted ? 1 : -1;
      });

      return sortedCountries;
    }
    case "restore": {
      const updatedCountries = countriesData.map((country) =>
        country.id === action.id ? { ...country, isDeleted: false } : country
      );

      return updatedCountries;
    }
    case "create": {
      return [
        ...countriesData,
        {
          ...action.data,
          id: nextId++,
        },
      ];
      
    }
    
    
    default:
      return countriesData;
  }
}
export default countriesReducer;
