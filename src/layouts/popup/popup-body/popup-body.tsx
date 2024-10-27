import { PropsWithChildren } from "react";
import styles from "../popup.module.css";
const PopupBody: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};
export default PopupBody;
