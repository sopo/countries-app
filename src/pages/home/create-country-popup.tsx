import Popup from "@/layouts/popup/popup";
import PopupHeader from "@/layouts/popup/popup-header/popup-header";
import PopupBody from "@/layouts/popup/popup-body/popup-body";
import Form from "@/components/form/form";
import Input from "@/components/form/input/input";
import TextArea from "@/components/form/text-area/text-area";
import Button from "@/components/button/button";
import { ChangeEvent, useState } from "react";
import { Country } from "@/components/cards/cards-data/country";
import { useParams } from "react-router-dom";
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
  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [title, setTitle] = useState("");
  const [population, setPopulation] = useState("");
  const [description, setDescription] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [capitalErrorMessage, setCapitalErrorMessage] = useState("");
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [populationErrorMessage, setPopulationErrorMessage] = useState("");
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    if (newName === "") {
      setNameErrorMessage("Country name should not be empty");
    } else {
      setNameErrorMessage("");
    }
  };
  const handleCapitalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCapital = e.target.value;
    setCapital(newCapital);
    if (newCapital === "") {
      setCapitalErrorMessage("Capital should not be empty");
    } else {
      setCapitalErrorMessage("");
    }
  };
  const handlePopulationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPopulation = e.target.value;
    const numericValue = Number(newPopulation);

    if (newPopulation !== "" && isNaN(numericValue)) {
      setPopulationErrorMessage("Population must be number");
    } else {
      setPopulationErrorMessage("");
    }
    setPopulation(newPopulation);
  };
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (newTitle === "") {
      setTitleErrorMessage("Title should not be empty");
    } else {
      setTitleErrorMessage("");
    }
  };
  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = e.target.value;
    setDescription(newDescription);

    if (newDescription === "") {
      setDescriptionErrorMessage("Description should not be empty");
    } else {
      setDescriptionErrorMessage("");
    }
  };
  function createArticle() {
    handleCreateArticle({
      id: 0,
      name: name,
      capital: capital,
      population: +population,
      description: description,
      title: title,
      imageUrl:
        "https://images.unsplash.com/photo-1673179559805-8dfbf64e10d4?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isDeleted: false,
      rating: 0,
    });
  }
  const {lang} = useParams();
  const kaContent = {
    name: "ქვეყანა",
    capital: "დედაქალაქი",
    population: "მოსახლეობის რაოდენობა",
    title: "სტატიის სათაური",
    descrtiption: "სტატიის ტექსტი",
    button: "დამატება",
    formTitle: "სტატიის დამატება",
  }
  const enContent = {
    name: "Country",
    capital: "Capital",
    population: "Population",
    title: "Title",
    descrtiption: "Description",
    button: "Add",
    formTitle: "Add new article",
  }
  const content = lang ==="en" ? enContent : kaContent 
  return (
    <Popup isOpen={isOpen}>
      <PopupHeader title={content.formTitle} onClick={handlePopupCloseClick} />
      <PopupBody>
        <Form onSubmit={createArticle}>
          <Input
            id="name"
            errorMessage={nameErrorMessage}
            name="country"
            placeholder={content.name}
            value={name}
            onChange={handleNameChange}
          />
          <Input
            id="capital"
            name="capital"
            placeholder={content.capital}
            value={capital}
            errorMessage={capitalErrorMessage}
            onChange={handleCapitalChange}
          />
          <Input
            id="population"
            name="population"
            placeholder={content.population}
            value={population}
            errorMessage={populationErrorMessage}
            onChange={handlePopulationChange}
          />
          <Input
            id="title"
            name="title"
            placeholder={content.title}
            errorMessage={titleErrorMessage}
            value={title}
            onChange={handleTitleChange}
          />
          <TextArea
            id="description"
            name="description"
            placeholder={content.descrtiption}
            errorMessage={descriptionErrorMessage}
            value={description}
            onChange={handleDescriptionChange}
          />
          <Button
            title={content.button}
            className="buttonPrimaryM"
            type="submit"
          />
        </Form>
      </PopupBody>
    </Popup>
  );
};
export default CreateCountryPopup;
