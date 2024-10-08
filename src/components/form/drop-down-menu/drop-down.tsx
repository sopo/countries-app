import {useState} from 'react';
import styles from './drop-down.module.css';
import ChevronDown from '@/assets/icons/chevron.down.svg?react';
import DropDownOptions from './drop-down-options/drop-down-options';
const dropDownOptions = [
    {id: 1, label: "Popular first"},
    {id: 2, label: "Newest first"}
]
interface DropDownProps{
    dropDownTitle: string;
}
const DropDown: React.FC<DropDownProps> = ({dropDownTitle}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleDropdownClick = () =>{
        setIsOpen(true);
    }
    return(
        <div className={styles.dropdown} onClick={handleDropdownClick}>
            <p className={styles.dropdownTitle}>{dropDownTitle}</p>
            <ChevronDown className="icon-m" />
            {
                isOpen && <DropDownOptions dropDownOptions={dropDownOptions} />
            }
        </div>
    )
}
export default DropDown;