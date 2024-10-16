import { ChangeEvent } from "react";
import styles from "./text-area.module.css";
interface TextAreaProps {
  id: string;
  name: string;
  placeholder: string;
  onChange?: (event:ChangeEvent<HTMLTextAreaElement>) => void;
  value: string | number;
}
const TextArea: React.FC<TextAreaProps> = ({ id, name, placeholder,onChange, value }) => {
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
    </div>
  );
};
export default TextArea;
