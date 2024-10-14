import { FormEvent, PropsWithChildren } from "react";
import styles from "./form.module.css";
interface FormProps {
  title?: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;

}
const Form: React.FC<PropsWithChildren<FormProps>> = ({ children, title, onSubmit }) => {

  function handleSubmit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(onSubmit){
      onSubmit(e)
    }
  }

  return (
    <div className={styles.formContainer}>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>{children}</form>
    </div>
  );
};
export default Form;
