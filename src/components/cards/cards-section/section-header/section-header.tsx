import { PropsWithChildren } from 'react';
import styles from '../cards-section.module.css';
const SectionHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.sectionHeader}>{children}</div>;
};
export default SectionHeader;
