
import Popup from "@/layouts/popup/popup";
import PopupHeader from "@/layouts/popup/popup-header/popup-header";
import PopupBody from "@/layouts/popup/popup-body/popup-body";
import Form from "@/components/form/form";
import Input from "@/components/form/input/input";
import TextArea from "@/components/form/text-area/text-area";
import Button from "@/components/button/button";
import { useState } from "react";
import { Country } from "@/components/cards/cards-data/country";

interface CreateCountryPopupProps{
    isOpen: boolean;
    handlePopupCloseClick: () => void;
    handleCreateArticle: (data: Country) => void;

}
const CreateCountryPopup:React.FC<CreateCountryPopupProps> = ({isOpen, handlePopupCloseClick, handleCreateArticle,}) => {
 const initialCountry = {
    id: 0,
    name: "",
    title: "",
    population: 0,
    capital: "",
    description: "",
    imageUrl: "https://images.unsplash.com/photo-1673179559805-8dfbf64e10d4?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isDeleted: false,
    rating: 0,
 }
  const [newCountry,setNewCountry] = useState<Country>(initialCountry);
  function handleInputChange(key:string, value:string){
    setNewCountry( (prev)=>({
      ...prev,
      [key]:value
    }) )
  }
  return(
        <Popup isOpen={isOpen} > 
        <PopupHeader title="Add new article" onClick={handlePopupCloseClick} />
        <PopupBody>
          <Form onSubmit={()=>handleCreateArticle(newCountry)}>
          <Input id="name" name="country"  placeholder="Country name" onChange={(e)=> handleInputChange('name',e.target.value) }  />
          <Input id="capital" name="capital" placeholder="Capital" onChange={(e)=> handleInputChange('capital',e.target.value) } />
          <Input id="population" name="population" placeholder="Population" onChange={(e)=> handleInputChange('population',e.target.value) } />
          <Input id="title" name="title" placeholder="Article title" onChange={(e)=> handleInputChange('title',e.target.value) }/>
          <TextArea id="description" name="description" placeholder="Article description" onChange={(e)=> handleInputChange('description',e.target.value) }/>
          <Button  title="Add article" className="buttonPrimaryM" type="submit" />
          </Form>
        </PopupBody>
      </Popup>
    )
}
export default CreateCountryPopup;