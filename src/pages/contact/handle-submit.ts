const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
   
    const firstName = document.getElementById("name") as HTMLInputElement | null;
    const lastName = document.getElementById("lastname") as HTMLInputElement | null;
    const email = document.getElementById("email") as HTMLInputElement | null;
    const message = document.getElementById("message") as HTMLInputElement | null;
    const data = {
        name: firstName?.value || '',
        lastName: lastName?.value || '',
        email: email?.value || '',
        message: message?.value || '',

    }
    console.log(data)
}
export default handleSubmit;