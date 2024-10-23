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
  const [georgianName, setGeorgianName] = useState("")
  const [englishName, setEnglishName] = useState("");
  const [georgianCapital, setGeorgianCapital] = useState("");
  const [englishCapital, setEnglishCapital] = useState("");
  const [georgianTitle, setGeorgianTitle] = useState("");
  const [englishTitle, setEnglishTitle] = useState("");
  const [georgianDescription, setGeorgianDescription] = useState("");
  const [englishDescription, setEnglishDescription] = useState("");


  const [population, setPopulation] = useState("");

  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [capitalErrorMessage, setCapitalErrorMessage] = useState("");
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [populationErrorMessage, setPopulationErrorMessage] = useState("");
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");
  const [img, setImg] = useState("");
 
  const {lang} = useParams();
  const filteredContent = lang === "en" ? content.en : content.ka

  const handleGeorgianNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setGeorgianName(newName);
    if (newName === "") {
      setNameErrorMessage(`${filteredContent.name.error}`);
    } else {
      setNameErrorMessage("");
    }
  };
  const handleEnglishNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setEnglishName(newName);
    if (newName === "") {
      setNameErrorMessage(`${filteredContent.name.error}`);
    } else {
      setNameErrorMessage("");
    }
  };
  const handleEnglishCapitalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCapital = e.target.value;
    setEnglishCapital(newCapital);
    if (newCapital === "") {
      setCapitalErrorMessage(`${filteredContent.capital.error}`);
    } else {
      setCapitalErrorMessage("");
    }
  };
  const handleGeorgianCapitalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCapital = e.target.value;
    setGeorgianCapital(newCapital);
    if (newCapital === "") {
      setCapitalErrorMessage(`${filteredContent.capital.error}`);
    } else {
      setCapitalErrorMessage("");
    }
  };
  const handleGeorgianTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setGeorgianTitle(newTitle);
    if (newTitle === "") {
      setTitleErrorMessage(`${filteredContent.title.error}`);
    } else {
      setTitleErrorMessage("");
    }
  };
  const handleEnglishTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setEnglishTitle(newTitle);
    if (newTitle === "") {
      setTitleErrorMessage(`${filteredContent.title.error}`);
    } else {
      setTitleErrorMessage("");
    }
  };
  const handleGeorgianDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = e.target.value;
    setGeorgianDescription(newDescription);

    if (newDescription === "") {
      setDescriptionErrorMessage(`${filteredContent.description.error}`);
    } else {
      setDescriptionErrorMessage("");
    }
  };
  const handleEnglishDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = e.target.value;
    setEnglishDescription(newDescription);

    if (newDescription === "") {
      setDescriptionErrorMessage(`${filteredContent.description.error}`);
    } else {
      setDescriptionErrorMessage("");
    }
  };
  const handlePopulationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPopulation = e.target.value;
    const numericValue = Number(newPopulation);

    if (newPopulation !== "" && isNaN(numericValue)) {
      setPopulationErrorMessage(`${filteredContent.population.error}`);
    } else {
      setPopulationErrorMessage("");
    }
    setPopulation(newPopulation);
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
      name: {
        ka: georgianName,
        en: englishName
      },
    capital:{
      ka: georgianCapital,
      en: englishCapital,
    },
    title:{
      ka: georgianTitle,
      en: englishTitle,
    },
    description:{
      ka: georgianDescription,
      en: englishDescription,
    },
      population: +population,
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
          <div className="display-flex">
          <div>
          <Input
            id="nameInGeorgian"
            errorMessage={nameErrorMessage}
            name="nameInGeorgian"
            placeholder={filteredContent.name.ka}
            value={georgianName}
            onChange={handleGeorgianNameChange}
          />
            <Input
            id="capitalInGeorgian"
            errorMessage={capitalErrorMessage}
            name="capitalInGeorgian"
            placeholder={filteredContent.capital.ka}
            value={georgianCapital}
            onChange={handleGeorgianCapitalChange}
          />
             <Input
            id="titleInGeorgian"
            name="titleInGeorgian"
            placeholder={filteredContent.title.ka}
            errorMessage={titleErrorMessage}
            value={georgianTitle}
            onChange={handleGeorgianTitleChange}
          />
           <TextArea
            id="descriptionInGeorgian"
            name="descriptionInGeorgian"
            placeholder={filteredContent.description.ka}
            errorMessage={descriptionErrorMessage}
            value={georgianDescription}
            onChange={handleGeorgianDescriptionChange}
          />
          </div>
          <div>
          <Input
            id="nameInEnglish"
            errorMessage={nameErrorMessage}
            name="nameInEnglish"
            placeholder={filteredContent.name.en}
            value={englishName}
            onChange={handleEnglishNameChange}
          />
          
            <Input
            id="capitalInEnglish"
            errorMessage={capitalErrorMessage}
            name="capitalInEnglish"
            placeholder={filteredContent.capital.en}
            value={englishCapital}
            onChange={handleEnglishCapitalChange}
          />
      
             <Input
            id="titleInEnglish"
            name="titleInEnglish"
            placeholder={filteredContent.title.en}
            errorMessage={titleErrorMessage}
            value={englishTitle}
            onChange={handleEnglishTitleChange}
          />
             <TextArea
            id="descriptionInEnglish"
            name="descriptionInEnglish"
            placeholder={filteredContent.description.en}
            errorMessage={descriptionErrorMessage}
            value={englishDescription}
            onChange={handleEnglishDescriptionChange}
          />
          </div>
          </div>
          <Input
            id="population"
            name="population"
            placeholder={filteredContent.population.population}
            value={population}
            errorMessage={populationErrorMessage}
            onChange={handlePopulationChange}
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
