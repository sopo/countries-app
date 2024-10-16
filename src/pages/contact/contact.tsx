import React, { ChangeEvent } from "react";
import { useState } from "react";
import Form from "@/components/form/form";
import Input from "@/components/form/input/input";
import TextArea from "@/components/form/text-area/text-area";
import Button from "@/components/button/button";
const Contact: React.FC = () => {
const [name, setName] = useState('');
const [lastname, setLastname] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [nameErrorMessage, setNameErrorMessage] = useState('');
const [lastnameErrorMessage, setLastnameErrorMessage] = useState('')
const [emailErrorMessage, setEmailErrorMessage] = useState('')
const [messageErrorMessage, setMessageErrorMessage] = useState('')

const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value);
  if(name.length > 8){
    setNameErrorMessage('Name must be less than 8 characters')
  }else{
    setNameErrorMessage('');
  }
};
const handleChangeLastname = (e: ChangeEvent<HTMLInputElement>) => {
  setLastname(e.target.value);
  if(lastname.length > 8){
    setLastnameErrorMessage('Lastname must be less than 8 characters')
  }else{
    setLastnameErrorMessage('');
  }
};
const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
  setEmail(e.target.value);
  if(email.length > 8){
    setEmailErrorMessage('email must be less than 8 characters')
  }else{
    setEmailErrorMessage('');
  }
};
const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
  setMessage(e.target.value);
  if(message.length > 8){
    setMessageErrorMessage('Message must be less than 8 characters')
  }else{
    setMessageErrorMessage('');
  }
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
        <Input id="name" name="name" placeholder="First name" value={name} onChange={handleChangeName} errorMessage={nameErrorMessage}/>
        <Input id="lastname" name="lastname" placeholder="Last name" value={lastname} onChange={handleChangeLastname} errorMessage={lastnameErrorMessage}/>
        <Input id="email" name="email" placeholder="E-mail" value={email} onChange={handleChangeEmail} errorMessage={emailErrorMessage}/>
        <TextArea id="message" name="message" placeholder="Message" value={message} onChange={handleChangeMessage} errorMessage={messageErrorMessage}/>
        
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
