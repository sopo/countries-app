import { PropsWithChildren } from "react";
import styles from "./container.module.css";

const CardContainer: React.FC <PropsWithChildren> = ({children}) => { 
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
}

export default CardContainer;