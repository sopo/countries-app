import Popup from "@/layouts/popup/popup";
import PopupHeader from "@/layouts/popup/popup-header/popup-header";
import PopupBody from "@/layouts/popup/popup-body/popup-body";
import Form from "@/components/form/form";
import Input from "@/components/form/input/input";
import TextArea from "@/components/form/text-area/text-area";
import Button from "@/components/button/button";
import content from "./create-country-popup-content";
import { ChangeEvent, useState } from "react";
import { Country } from "@/components/cards/cards-data/country";
import { useParams,} from "react-router-dom";
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
  const [img, setImg] = useState("");
  //კონტენტის გაფილტრვა ენის მიხედვით
  const {lang} = useParams();
  const filteredContent = lang === "en" ? content.en : content.ka


  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    if (newName === "") {
      setNameErrorMessage(`${filteredContent.nameError}`);
    } else {
      setNameErrorMessage("");
    }
  };
  const handleCapitalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCapital = e.target.value;
    setCapital(newCapital);
    if (newCapital === "") {
      setCapitalErrorMessage(`${filteredContent.capitalError}`);
    } else {
      setCapitalErrorMessage("");
    }
  };
  const handlePopulationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPopulation = e.target.value;
    const numericValue = Number(newPopulation);

    if (newPopulation !== "" && isNaN(numericValue)) {
      setPopulationErrorMessage(`${filteredContent.populationError}`);
    } else {
      setPopulationErrorMessage("");
    }
    setPopulation(newPopulation);
  };
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (newTitle === "") {
      setTitleErrorMessage(`${filteredContent.titleError}`);
    } else {
      setTitleErrorMessage("");
    }
  };
  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = e.target.value;
    setDescription(newDescription);

    if (newDescription === "") {
      setDescriptionErrorMessage(`${filteredContent.descriptionError}`);
    } else {
      setDescriptionErrorMessage("");
    }
  };
  function handleUploadChange(e: ChangeEvent<HTMLInputElement>){
    const file = e.target.files[0];
    if (file) {
      setImg(URL.createObjectURL(file)) 
    }
  }
  function createArticle() {
    handleCreateArticle({
      id: 0,
      name: name,

      capital: capital,
      population: +population,
      description: description,
      title: title,
      imageUrl: img,
      isDeleted: false,
      rating: 0,
    });
  }

  return (
    <Popup isOpen={isOpen}>
      <PopupHeader title={filteredContent.formTitle} onClick={handlePopupCloseClick} />
      <PopupBody>
        <Form onSubmit={createArticle}>

          <Input
            id="name"
            errorMessage={nameErrorMessage}
            name="country"
            placeholder={filteredContent.name}
            value={name}
            onChange={handleNameChange}
          />
          <Input
            id="name"
            errorMessage={nameErrorMessage}
            name="country"
            placeholder={filteredContent.name}
            value={name}
            onChange={handleNameChange}
          />
          <Input
            id="capital"
            name="capital"
            placeholder={filteredContent.capital}
            value={capital}
            errorMessage={capitalErrorMessage}
            onChange={handleCapitalChange}
          />
          <Input
            id="population"
            name="population"
            placeholder={filteredContent.population}
            value={population}
            errorMessage={populationErrorMessage}
            onChange={handlePopulationChange}
          />
          <Input
            id="title"
            name="title"
            placeholder={filteredContent.title}
            errorMessage={titleErrorMessage}
            value={title}
            onChange={handleTitleChange}
          />
          <TextArea
            id="description"
            name="description"
            placeholder={filteredContent.description}
            errorMessage={descriptionErrorMessage}
            value={description}
            onChange={handleDescriptionChange}
          />
          <Input
            type="file"
            onChange={handleUploadChange}
            accept=".png, .jpg, .jpeg"
           />
          <Button
            title={filteredContent.button}
            className="buttonPrimaryM"
            type="submit"
          />
        </Form>
      </PopupBody>
    </Popup>
  );
};
export default CreateCountryPopup;
