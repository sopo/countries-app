import { PropsWithChildren } from "react";
import styles from "./cards-section.module.css";

const CardsSection: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`container-xl ${styles.containerSpacing}`}>
      <div className={styles.section}>{children}</div>
    </div>
  );
};
export default CardsSection;
