import { ChangeEvent } from 'react';
import styles from './input.module.css';
interface InputProps{
    id: string,
    name: string;
    placeholder: string;
    onChange?: (event:ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({id, name, placeholder, onChange}) => {
    return(
        <div>
            <input
                id={id}
                name={name}
                placeholder={placeholder}
                className={styles.input}
                onChange={onChange}
            />
        </div>
    )
}
export default Input;