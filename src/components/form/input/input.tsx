import styles from './input.module.css';
interface InputProps{
    id: string,
    name: string;
    placeholder: string;
}
const Input: React.FC<InputProps> = ({id, name, placeholder}) => {
    return(
        <div>
            <input
                id={id}
                name={name}
                placeholder={placeholder}
                className={styles.input}
            />
        </div>
    )
}
export default Input;