import { PropsWithChildren } from "react";
import styles from "./tab-bar.module.css";
const TabBar: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.tabContainer}>{children}</div>;
};
export default TabBar;
