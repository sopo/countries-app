import styles from './button.module.css';
interface ButtonProps {
  title: string;
  className: string;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonProps> = ({ type, title, className, onClick, disabled }) => {
  return (
    <button className={styles[className]} type={type} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};
export default Button;
