import styles from './otp-container.module.css';
import otpInputSd from './otp-input-sd';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import OtpInput from './otp-input';
interface NumberOfInputsProps {
  numberOfInputs: number;
}
const OtpContainer: React.FC<NumberOfInputsProps> = ({ numberOfInputs }) => {
  const { lang } = useParams();
  const content = lang === 'en' ? otpInputSd.en : otpInputSd.ka;
  const [values, setValues] = useState(Array(numberOfInputs).fill(''));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newValue = e.target.value;

    setValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = newValue;
      return newValues;
    });
  };
  return (
    <div>
      <h1>{content.title}</h1>
      <div className={styles.container}>
        {Array.from({ length: numberOfInputs }, (_, i) => (
          <OtpInput
            key={i}
            value={values[i]}
            onChange={(e) => handleChange(e, i)}
          />
        ))}
      </div>
    </div>
  );
};
export default OtpContainer;
