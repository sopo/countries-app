import styles from './button.module.css';
interface ButtonProps {
  title: string;
  className: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonProps> = ({ type, title, className, onClick }) => {
  return (
    <button className={styles[className]} type={type} onClick={onClick}>
      {title}
    </button>
  );
};
export default Button;
