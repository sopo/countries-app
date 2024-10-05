import { PropsWithChildren } from "react";
import styles from "./form.module.css";
interface FormProps {
  title: string;
}
const Form: React.FC<PropsWithChildren<FormProps>> = ({ children, title }) => {
  return (
    <div className={styles.formContainer}>
      <h2>{title}</h2>
      <form className={styles.form}>{children}</form>
    </div>
  );
};
export default Form;
