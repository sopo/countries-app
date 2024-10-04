import styles from './button.module.css'
interface ButtonProps{
    title: string;
    className: string;
}

const Button: React.FC<ButtonProps> = ({title, className}) => {

    return(
        <div className={styles[className]} >
            {title}
        </div>
    )
}
export default Button;