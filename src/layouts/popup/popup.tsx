
import { PropsWithChildren } from "react";
import styles from "./popup.module.css";
interface PopupProps extends PropsWithChildren{
    isOpen: boolean;
}
const Popup: React.FC<PopupProps> = ({ children, isOpen,}) => {
  if (isOpen) {
    return (
      <div className={styles.overlay}>
        <div className={styles.popup}>
          {children}
        </div>
      </div>
    );
  }
};
export default Popup;
