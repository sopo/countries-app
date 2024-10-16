import React, { ChangeEvent } from "react";
import { useState } from "react";
import Form from "@/components/form/form";
import Input from "@/components/form/input/input";
import TextArea from "@/components/form/text-area/text-area";
import Button from "@/components/button/button";
// import handleSubmit from "./handle-submit";
const Contact: React.FC = () => {


const [name, setName] = useState('');
const [lastname, setLastname] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value)
};
const handleChangeLastname = (e: ChangeEvent<HTMLInputElement>) => {
  setLastname(e.target.value)
};
const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
  setEmail(e.target.value)
};
const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
  setMessage(e.target.value)
};
const formData = {
  name: name,
  lastname: lastname,
  email: email,
  message: message,
}
const handleSubmit = () => {
  console.log(formData)
}
  return (
    <div className="container-xl">
      <Form title="Send message">
        <Input id="name" name="name" placeholder="First name" value={name} onChange={handleChangeName}/>
        <Input id="lastname" name="lastname" placeholder="Last name" value={lastname} onChange={handleChangeLastname}/>
        <Input id="email" name="email" placeholder="E-mail" value={email} onChange={handleChangeEmail} />
        <TextArea id="message" name="message" placeholder="Message" value={message} onChange={handleChangeMessage}/>
        <Button
          type="submit"
          title="Submit"
          className="buttonPrimaryM"
          onClick={handleSubmit}
        />
      </Form>
    </div>
  );
};
export default Contact;
