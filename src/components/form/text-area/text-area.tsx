import { ChangeEvent } from "react";
import styles from "./text-area.module.css";
interface TextAreaProps {
  id: string;
  name: string;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string | number;
  errorMessage?: string;
}
const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  placeholder,
  onChange,
  value,
  errorMessage,
}) => {
  return (
    <div>
      <textarea
        id={id}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className={styles.textArea}
        value={value}
      />
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};
export default TextArea;
