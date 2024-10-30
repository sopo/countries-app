import Form from '@/components/form/form';
import OtpContainer from '@/components/form/input/otp-input/otp-container';

const SignIn: React.FC = () => {
  return (
    <div className="container-xl">
      <Form>
        <OtpContainer numberOfInputs={4} />
      </Form>
    </div>
  );
};
export default SignIn;
