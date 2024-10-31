import styles from './otp-input.module.css';
import { forwardRef } from 'react';
interface OtpInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onPaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
}
const OtpInput = forwardRef<HTMLInputElement, OtpInputProps>(
  ({ value, onChange, onKeyDown, onPaste }, ref) => {
    return (
      <div>
        <input
          value={value}
          onChange={onChange}
          className={styles.input}
          placeholder="X"
          maxLength={1}
          ref={ref}
          onKeyDown={onKeyDown}
          onPaste={onPaste}
        />
      </div>
    );
  },
);
export default OtpInput;
