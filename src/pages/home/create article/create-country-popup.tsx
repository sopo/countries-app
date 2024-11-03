import Popup from '@/layouts/popup/popup';
import tabStyles from '@/components/tab/tab-bar.module.css';
import PopupHeader from '@/layouts/popup/popup-header/popup-header';
import PopupBody from '@/layouts/popup/popup-body/popup-body';
import Form from '@/components/form/form';
import Input from '@/components/form/input/input';
import Button from '@/components/button/button';
import content from './create-country-popup-content';
import { ChangeEvent, useState, useEffect } from 'react';
import { Country } from '@/components/cards/cards-data/country';
import { useParams } from 'react-router-dom';
import TabBar from '@/components/tab/tab-bar';
import Tab from '@/components/tab/tab';
import axios from 'axios';
interface CreateCountryPopupProps {
  isOpen: boolean;
  handlePopupCloseClick: () => void;
  handleCreateArticle: (data: Omit<Country, 'id'>) => void;
  id?: string;
}
function imageToBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

//კომპონენტი
const CreateCountryPopup: React.FC<CreateCountryPopupProps> = ({
  isOpen,
  handlePopupCloseClick,
  handleCreateArticle,
  id,
}) => {

  // useEffect
  useEffect(() => {
    if (id) {
      axios
        .get<Country>(`http://localhost:3000/countries/${id}`)
        .then(({ data }) => {
          setGeorgianName(data.name.ka);
          setEnglishName(data.name.en);
          setGeorgianCapital(data.capital.ka);
          setEnglishCapital(data.capital.en);
          setPopulation(data.population.toString())
        });
    }
  }, [id]);

  //useState ფილდებისთვის, ტაბებისთვის
  const [georgianName, setGeorgianName] = useState('');
  const [englishName, setEnglishName] = useState('');
  const [georgianCapital, setGeorgianCapital] = useState('');
  const [englishCapital, setEnglishCapital] = useState('');
  const [population, setPopulation] = useState("");
  const [georgianNameErrorMessage, setGeorgianNameErrorMessage] = useState('');
  const [englishNameErrorMessage, setEnglishNameErrorMessage] = useState('');
  const [georgianCapitalErrorMessage, setGeorgianCapitalErrorMessage] =
    useState('');
  const [englishCapitalErrorMessage, setEnglishCapitalErrorMessage] =
    useState('');
  const [populationErrorMessage, setPopulationErrorMessage] = useState('');
  const [img, setImg] = useState('');
  const [firstTabActive, setFirstTabActive] = useState(true);
  const [secondTabActive, setSecondTabActive] = useState(false);

  // ენის ფილტრი
  const { lang } = useParams();
  const filteredContent = lang === 'en' ? content.en : content.ka;

  //handlers
  const handleGeorgianNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setGeorgianName(newName);
    if (newName === '') {
      setGeorgianNameErrorMessage(`${filteredContent.name.error}`);
    } else {
      setGeorgianNameErrorMessage('');
    }
  };
  const handleEnglishNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setEnglishName(newName);
    if (newName === '') {
      setEnglishNameErrorMessage(`${filteredContent.name.error}`);
    } else {
      setEnglishNameErrorMessage('');
    }
  };
  const handleEnglishCapitalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCapital = e.target.value;
    setEnglishCapital(newCapital);
    if (newCapital === '') {
      setEnglishCapitalErrorMessage(`${filteredContent.capital.error}`);
    } else {
      setEnglishCapitalErrorMessage('');
    }
  };
  const handleGeorgianCapitalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCapital = e.target.value;
    setGeorgianCapital(newCapital);
    if (newCapital === '') {
      setGeorgianCapitalErrorMessage(`${filteredContent.capital.error}`);
    } else {
      setGeorgianCapitalErrorMessage('');
    }
  };
  const handlePopulationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPopulation = e.target.value;
    const numericValue = Number(newPopulation);
    if (newPopulation !== '' && isNaN(numericValue)) {
      setPopulationErrorMessage(`${filteredContent.population.error}`);
    } else {
      setPopulationErrorMessage('');
    }
    setPopulation(newPopulation);
  };
  function handleUploadChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        imageToBase64(file)
          .then((base64String) => {
            setImg(base64String);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    }
  }

  //createArticle
  function createArticle() {
    handleCreateArticle({
      name: {
        ka: georgianName,
        en: englishName,
      },
      capital: {
        ka: georgianCapital,
        en: englishCapital,
      },
      population: +population,
      imageUrl: img,
      rating: 0,
    });
  }

  // ტაბების ლოგიკა
  const handleFirstTabChange = () => {
    setFirstTabActive(true);
    setSecondTabActive(false);
  };
  const handleSecondTabChange = () => {
    setFirstTabActive(false);
    setSecondTabActive(true);
  };
  const firstTabStyle = firstTabActive
    ? tabStyles.activeTab
    : tabStyles.initialTab;
  const secondTabStyle = secondTabActive
    ? tabStyles.activeTab
    : tabStyles.initialTab;
  const showFirstTabInputs = firstTabActive
    ? tabStyles.activeTabContent
    : tabStyles.inactiveTabContent;
  const showSecondTabInputs = secondTabActive
    ? tabStyles.activeTabContent
    : tabStyles.inactiveTabContent;

  return (
    <Popup isOpen={isOpen}>
      <PopupHeader
        title={filteredContent.formTitle}
        onClick={handlePopupCloseClick}
      />
      <PopupBody>
        <Form onSubmit={createArticle}>
          <div className="display-flex column">
            <TabBar>
              <Tab
                className={firstTabStyle}
                tabTitle={filteredContent.tab.first}
                onClick={handleFirstTabChange}
              />
              <Tab
                className={secondTabStyle}
                tabTitle={filteredContent.tab.second}
                onClick={handleSecondTabChange}
              />
            </TabBar>

            <div className={showFirstTabInputs}>
              <Input
                id="nameInGeorgian"
                errorMessage={georgianNameErrorMessage}
                name="nameInGeorgian"
                placeholder={filteredContent.name.ka}
                value={georgianName}
                onChange={handleGeorgianNameChange}
              />
              <Input
                id="capitalInGeorgian"
                errorMessage={georgianCapitalErrorMessage}
                name="capitalInGeorgian"
                placeholder={filteredContent.capital.ka}
                value={georgianCapital}
                onChange={handleGeorgianCapitalChange}
              />
            </div>
            <div className={showSecondTabInputs}>
              <Input
                id="nameInEnglish"
                errorMessage={englishNameErrorMessage}
                name="nameInEnglish"
                placeholder={filteredContent.name.en}
                value={englishName}
                onChange={handleEnglishNameChange}
              />

              <Input
                id="capitalInEnglish"
                errorMessage={englishCapitalErrorMessage}
                name="capitalInEnglish"
                placeholder={filteredContent.capital.en}
                value={englishCapital}
                onChange={handleEnglishCapitalChange}
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
