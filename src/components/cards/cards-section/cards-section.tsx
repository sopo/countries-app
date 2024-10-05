import { PropsWithChildren } from "react";
import styles from './cards-section.module.css'
const CardsSection: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`container-xl title-m margin-vertical-xl`}>
      <p className="title-s text-primary margin-vertical-xl">New offers</p>
      <div className={styles.section}>
      {children}
      </div>
    </div>
  );
}
export default CardsSection;
