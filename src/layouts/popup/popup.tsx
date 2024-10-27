import { PropsWithChildren } from "react";
import styles from "./popup.module.css";
interface PopupProps extends PropsWithChildren {
  isOpen: boolean;
}
const Popup: React.FC<PopupProps> = ({ children, isOpen }) => {
  if (isOpen) {
    return (
      <div className={styles.overlay}>
        <div className={styles.popup}>
          <div className={styles.container}>{children}</div>
        </div>
      </div>
    );
  }
};
export default Popup;
