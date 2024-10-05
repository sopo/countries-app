import styles from './input.module.css';
interface InputProps{
    name: string;
    placeholder: string;
}
const Input: React.FC<InputProps> = ({name, placeholder}) => {
    return(
        <div>
            <input 
                name={name}
                placeholder={placeholder}
                className={styles.input}
            />
            
        </div>
    )
}
export default Input;