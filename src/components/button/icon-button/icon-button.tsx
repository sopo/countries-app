import { PropsWithChildren, MouseEvent } from 'react';
import styles from './icon-button.module.css';
interface IconButtonProps extends PropsWithChildren {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
const IconButton: React.FC<IconButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.iconButton} onClick={onClick}>
      {children}
    </button>
  );
};
export default IconButton;
