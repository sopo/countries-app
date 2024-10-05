import styles from "./text-area.module.css";
interface TextAreaProps {
  name: string;
  placeholder: string;
}
const TextArea: React.FC<TextAreaProps> = ({ name, placeholder }) => {
  return (
    <div>
      <textarea
        name={name}
        placeholder={placeholder}
        className={styles.textArea}
      />
    </div>
  );
};
export default TextArea;
