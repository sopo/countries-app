import styles from "./text-area.module.css";
interface TextAreaProps {
  id: string;
  name: string;
  placeholder: string;
}
const TextArea: React.FC<TextAreaProps> = ({ id, name, placeholder }) => {
  return (
    <div>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className={styles.textArea}
      />
    </div>
  );
};
export default TextArea;
