import { PropsWithChildren } from 'react';
import styles from '../popup.module.css';
const PopupFooter: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.footer}>{children}</div>;
};
export default PopupFooter;
