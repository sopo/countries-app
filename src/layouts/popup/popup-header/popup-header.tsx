import IconButton from "@/components/button/icon-button/icon-button";
import CloseIcon from '@/assets/icons/xmark.svg?react';
import styles from '../popup.module.css'
interface PopupHeaderProps{
    title: string;
    onClick: () => void;
}
const PopupHeader: React.FC<PopupHeaderProps> = ({title, onClick}) => {
    return(
        <div className={styles.header}>
        <h2>{title}</h2>
        <IconButton>
        <CloseIcon className={styles.icon} onClick={onClick}/>
        </IconButton>
      </div>
    )
}
export default PopupHeader;