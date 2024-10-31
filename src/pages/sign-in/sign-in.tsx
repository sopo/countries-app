import Form from '@/components/form/form';
import OtpContainer from '@/components/form/input/otp-input/otp-container';

const SignIn: React.FC = () => {
 function codeFilled(values){
    console.log("fom success")
 }
  return (
    <div className="container-xl">
      <Form>
        <OtpContainer numberOfInputs={4} codeFilled={codeFilled}/>
      </Form>
    </div>
  );
};
export default SignIn;
