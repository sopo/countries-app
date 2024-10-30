 import styles from "./otp-input.module.css"
 interface OtpInputProps{
    key: number;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
 }
 const OtpInput:React.FC<OtpInputProps> = ({key, value, onChange}) => {
    return(
        <div>
            <input key={key} value={value} onChange={onChange} className={styles.input} placeholder="X" maxLength={1}/>
        </div>
    )
 }
 export default OtpInput;