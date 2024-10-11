import { Country } from "@/components/cards/cards-data/country";
type Action = { type: "like"; id: number } | { type: "sort"; newSort: boolean };

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
    default:
      return countries;
  }
}
export default countriesReducer;
