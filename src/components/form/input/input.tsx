import { ChangeEvent } from "react";
import styles from "./input.module.css";
interface InputProps {
  id?: string;
  name?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  errorMessage?: string;
  type?: string;
  accept?: string;
}
const Input: React.FC<InputProps> = ({
  id,
  name,
  placeholder,
  onChange,
  value,
  errorMessage,
  type,
  accept,
}) => {
  return (
    <div>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
        value={value}
        type={type}
        accept={accept}
      />
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};
export default Input;
