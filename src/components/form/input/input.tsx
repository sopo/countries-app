import { ChangeEvent } from 'react';
import styles from './input.module.css';
interface InputProps{
    id: string,
    name: string;
    placeholder: string;
    onChange?: (event:ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    errorMessage?: string;
    type?: string
}
const Input: React.FC<InputProps> = ({id, name, placeholder, onChange, value, errorMessage, type}) => {
    return(
        <div>
            <input
                id={id}
                name={name}
                placeholder={placeholder}
                className={styles.input}
                onChange={onChange}
                value ={value}
                type={type}

            />
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </div>
    )
}
export default Input;