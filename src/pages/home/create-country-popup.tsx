
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
 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [country,setCountry] = useState<any>({});

  function handleInputChange(key:string,value:string){
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setCountry( (prev:any)=>({
      ...prev,
      [key]:value
    }) )
  }

  return(
        <Popup isOpen={isOpen} > 
        <PopupHeader title="Add new article" onClick={handlePopupCloseClick} />
        <PopupBody>
          <Form onSubmit={()=>handleCreateArticle(country)}>
          <Input id="country" name="country" onChange={(e)=> handleInputChange('country',e.target.value) } placeholder="Country name"  />
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