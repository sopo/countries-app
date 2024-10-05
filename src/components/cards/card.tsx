import { PropsWithChildren } from "react";
import styles from "./card.module.css";

const CardContainer: React.FC <PropsWithChildren> = ({children}) => { 
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
}

export default CardContainer;