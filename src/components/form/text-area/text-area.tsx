import { ChangeEvent } from "react";
import styles from "./text-area.module.css";
interface TextAreaProps {
  id: string;
  name: string;
  placeholder: string;
  onChange?: (event:ChangeEvent<HTMLTextAreaElement>) => void;
}
const TextArea: React.FC<TextAreaProps> = ({ id, name, placeholder,onChange }) => {
  return (
    <div>
      <textarea
        id={id}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className={styles.textArea}
      />
    </div>
  );
};
export default TextArea;
