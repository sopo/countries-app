import Popup from "@/layouts/popup/popup";
import PopupHeader from "@/layouts/popup/popup-header/popup-header";
import PopupBody from "@/layouts/popup/popup-body/popup-body";
import Form from "@/components/form/form";
import Input from "@/components/form/input/input";
import TextArea from "@/components/form/text-area/text-area";
import Button from "@/components/button/button";
import { ChangeEvent, useState } from "react";
import { Country } from "@/components/cards/cards-data/country";
interface CreateCountryPopupProps {
  isOpen: boolean;
  handlePopupCloseClick: () => void;
  handleCreateArticle: (data: Country) => void;
}
const CreateCountryPopup: React.FC<CreateCountryPopupProps> = ({
  isOpen,
  handlePopupCloseClick,
  handleCreateArticle,
}) => {

  const initialCountry = {
    id: 0,
    name: "",
    title: "",
    population: 0,
    capital: "",
    description: "",
    imageUrl:
      "https://images.unsplash.com/photo-1673179559805-8dfbf64e10d4?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isDeleted: false,
    rating: 0,
  };
  const [newCountry, setNewCountry] = useState<Country>(initialCountry);
  const [name, setName] = useState('')
  const [capital, setCapital] = useState('')
  const [title, setTitle] = useState('')
  const [population, setPopulation] = useState('')
  const [description, setDescription] = useState("")
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [capitalErrorMessage, setCapitalErrorMessage] = useState('');
  const [titleErrorMessage, setTitleErrorMessage] = useState('');
  const [populationErrorMessage, setPopulationErrorMessage] = useState('');
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('')
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newName = (e.target.value)
    setName(newName)
    if(newName === ""){
      setNameErrorMessage("Country name should not be empty")
    }else{
      setNameErrorMessage("")
    }
    const country = {
      ...newCountry,
      name: newName
    }
    setNewCountry(country)
  }
  const handleCapitalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCapital = e.target.value
    setCapital(newCapital);
    if(newCapital === ""){
      setCapitalErrorMessage("Capital should not be empty")
    }else{
      setCapitalErrorMessage("")
    }
    const country = {
      ...newCountry,
      capital: newCapital
    }
    setNewCountry(country)
  }
  const handlePopulationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPopulation = e.target.value;
    const numericValue = Number(newPopulation)
    
    if(newPopulation !=="" && isNaN(numericValue)){
      setPopulationErrorMessage("Population must be number")
    }else{
      setPopulationErrorMessage("")
    }
    const country = {
      ...newCountry,
      population: numericValue || 0
    }
    setPopulation(newPopulation);
    setNewCountry(country)
  }
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setTitle(newTitle);
    if(newTitle === ""){
      setTitleErrorMessage("Title should not be empty")
    }else{
      setTitleErrorMessage("")
    }
    const country = {
      ...newCountry,
      title: newTitle
    }
    setNewCountry(country)
  }
  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = e.target.value
    setDescription(newDescription);
    const country = {
      ...newCountry,
      description: newDescription
    }
    if(newDescription === ""){
      setDescriptionErrorMessage("Description should not be empty")
    }else{
      setDescriptionErrorMessage("")
    }
    setNewCountry(country)
  }

  return (
    <Popup isOpen={isOpen}>
      <PopupHeader title="Add new article" onClick={handlePopupCloseClick} />
      <PopupBody>
        <Form onSubmit={() => handleCreateArticle(newCountry)}>
          <Input
            id="name"
            errorMessage={nameErrorMessage}
            name="country"
            placeholder="Country name"
            value={name}
            onChange={handleNameChange}
          />
          <Input
            id="capital"
            name="capital"
            placeholder="Capital"
            value={capital}
            errorMessage={capitalErrorMessage}
            onChange={handleCapitalChange}
          />
          <Input
            id="population"
            name="population"
            placeholder="Population"
            value={population}
            errorMessage={populationErrorMessage}
            onChange={handlePopulationChange}
          />
          <Input
            id="title"
            name="title"
            placeholder="Article title"
            errorMessage={titleErrorMessage}
            value={title}
            onChange={handleTitleChange}
          />
          <TextArea
            id="description"
            name="description"
            placeholder="Article description"
            errorMessage={descriptionErrorMessage}
            value={description}
            onChange={handleDescriptionChange}
          />
          <Button
            title="Add article"
            className="buttonPrimaryM"
            type="submit"
          />
        </Form>
      </PopupBody>
    </Popup>
  );
};
export default CreateCountryPopup;
