import { ChangeEvent } from 'react';
import styles from './input.module.css';
interface InputProps{
    id: string,
    name: string;
    placeholder: string;
    onChange?: (event:ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
}
const Input: React.FC<InputProps> = ({id, name, placeholder, onChange, value}) => {
    return(
        <div>
            <input
                id={id}
                name={name}
                placeholder={placeholder}
                className={styles.input}
                onChange={onChange}
                value ={value}
            />
        </div>
    )
}
export default Input;