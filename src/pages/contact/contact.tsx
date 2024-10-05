import Form from "@/components/form/form";
import Input from "@/components/form/input/input";
import TextArea from "@/components/form/text-area/text-area";
import Button from "@/components/button/button";
const Contact: React.FC = () => {
    return(
        <div className='container-xl'>
            <h1>contact</h1>
            <Form title="Send message">
                <Input name="name" placeholder="First name" />
                <Input name="surname" placeholder="Last name" />
                <Input name="email" placeholder="E-mail" />
                <TextArea name="message" placeholder="Message"/>
                <Button title="Submit" className="buttonPrimaryM"/>
            </Form>
        </div>
    )
}
export default Contact;