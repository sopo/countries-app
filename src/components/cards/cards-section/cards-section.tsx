import { PropsWithChildren } from "react";
import styles from './cards-section.module.css';
import DropDown from "@/components/form/drop-down-menu/drop-down";
const CardsSection: React.FC<PropsWithChildren> = ({ children }) => {
  return (
  <div className={`container-xl ${styles.containerSpacing}`}>
    <div className={styles.sectionTitle}>
      <h1 className="text-primary">Latest articles</h1>
      <DropDown dropDownTitle="Sort by" />
      </div>
      <div className={styles.section}>
      {children}
      </div>
    </div>
  );
}
export default CardsSection;
