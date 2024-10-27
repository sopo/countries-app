import { PropsWithChildren } from "react";
import styles from "./card-footer.module.css";

const CardFooter: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.cardFooter}>{children}</div>;
};
export default CardFooter;
