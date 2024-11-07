import { PropsWithChildren, MouseEvent } from 'react';
import styles from './icon-button.module.css';
interface IconButtonProps extends PropsWithChildren {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean
}
const IconButton: React.FC<IconButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button className={styles.iconButton} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
export default IconButton;
