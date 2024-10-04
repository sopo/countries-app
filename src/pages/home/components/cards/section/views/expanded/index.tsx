import countries from "../../static-data/cards-data";
import { useParams } from "react-router-dom";
import PageNotFound from "@/pages/page-not-found/views";

const ExpandedCard: React.FC = () => {
  const { id } = useParams();
  const country = countries.find((country) => country.id === id);
  const countryNotFound = !country;

  if(countryNotFound){
    return(
       <PageNotFound />
    )
  }else{
    return (
        <div>
          <h1>{country.name}</h1>
          <p>{country.population}</p>
         
          
        </div>
      );
  }

}
  

export default ExpandedCard;
