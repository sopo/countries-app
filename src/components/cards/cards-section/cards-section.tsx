import { PropsWithChildren } from "react";
import styles from './cards-section.module.css'
const CardsSection: React.FC<PropsWithChildren> = ({ children }) => {
  return (
  <div className={`container-xl ${styles.containerSpacing}`}>
      <h1 className="text-primary margin-vertical-xl">Latest articles</h1>
      <div className={styles.section}>
      {children}
      </div>
    </div>
  );
}
export default CardsSection;
