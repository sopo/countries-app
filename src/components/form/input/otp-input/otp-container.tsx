import styles from './otp-container.module.css';
import otpInputSd from './otp-input-sd';
import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import OtpInput from './otp-input';
interface NumberOfInputsProps {
  numberOfInputs: number;
  codeFilled: (values: string[]) => void;
}
const OtpContainer: React.FC<NumberOfInputsProps> = ({
  numberOfInputs,
  codeFilled,
}) => {
  const { lang } = useParams();
  const content = lang === 'en' ? otpInputSd.en : otpInputSd.ka;
  const [values, setValues] = useState(Array(numberOfInputs).fill(''));

  const ref = useRef<(HTMLInputElement | null)[]>(
    Array(numberOfInputs).fill(null),
  );
  function checkCodeFill(values: string[]) {
    if (
      values.every(
        (value) => value !== undefined && value !== null && value !== '',
      )
    ) {
      codeFilled(values);
    }
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newValue = e.target.value;
    if (/^[0-9]$/.test(newValue)) {
      setValues((prevValues) => {
        const newValues = [...prevValues];
        newValues[index] = newValue;
        checkCodeFill(newValues);
        return newValues;
      });
    }

    if (newValue && /^[0-9]$/.test(newValue) && index < values.length - 1) {
      ref.current[index + 1]?.focus();
    } else if (index === values.length - 1 && newValue) {
      e.target.blur();
    }
  };
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      if (values[index] !== '') {
        setValues((prevValues) => {
          const newValues = [...prevValues];
          newValues[index] = '';
          ref.current[index - 1]?.focus();
          return newValues;
        });
      } else if (index > 0) {
        ref.current[index - 1]?.focus();
      }
    }
  };
  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    if (/^\d+$/.test(pastedData)) {
      setValues((prevValues) => {
        const newValues = [...prevValues];
        const length = Math.min(pastedData.length, numberOfInputs - index);
        for (let i = 0; i < length; i++) {
          newValues[index + i] = pastedData[i];
        }
        checkCodeFill(newValues);
        return newValues;
      });
      ref.current[index]?.blur();
    }
    //1234 ABCD
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
            onKeyDown={(e) => handleKeyDown(e, i)}
            onPaste={(e) => handlePaste(e, i)}
            ref={(el) => (ref.current[i] = el)}
          />
        ))}
      </div>
    </div>
  );
};
export default OtpContainer;
