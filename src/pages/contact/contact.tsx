import React from "react";
import Form from "@/components/form/form";
import Input from "@/components/form/input/input";
import TextArea from "@/components/form/text-area/text-area";
import Button from "@/components/button/button";
import handleSubmit from "./handle-submit";
const Contact: React.FC = () => {

    return(
        <div className='container-xl'>
            <h1>contact</h1>
            <Form title="Send message">
                <Input id="name" name="name" placeholder="First name" />
                <Input id="lastname" name="lastname" placeholder="Last name" />
                <Input id="email" name="email" placeholder="E-mail" />
                <TextArea id="message" name="message" placeholder="Message"/>
                <Button type="submit" title="Submit" className="buttonPrimaryM" onClick={handleSubmit}/>
            </Form>
        </div>
    )
}
export default Contact;