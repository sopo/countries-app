import styles from './drop-down-options.module.css'
interface Option{
    id: number;
    label: string;
}
interface DropDownOptionsProps {
    dropDownOptions: Option[];
}
const DropDownOptions: React.FC<DropDownOptionsProps> =({dropDownOptions}) => {
    return(
        <div className={styles.container}>
            {dropDownOptions.map(option => (
                <p key={option.id}>{option.label}</p>
            ))}
        </div>
    )
}
export default DropDownOptions;