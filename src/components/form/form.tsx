import { PropsWithChildren } from "react";
import styles from './form.module.css'
interface FormProps{
    title: string;
}
const Form:React.FC<PropsWithChildren<FormProps>> = ({children, title}) => {
    return(
        <div>
            <h2>{title}</h2>
            <div className={styles.form}>
                <form>
                {children}
                </form>
            </div>
        </div>
    )
}
export default Form;