function getValue(inputId: string) {
  const input = document.getElementById(inputId) as HTMLInputElement | null;
  return input?.value || '';
}

const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  const data = {
    name: getValue('name'),
    lastName: getValue('lastname'),
    email: getValue('email'),
    message: getValue('message'),
  };
  console.log(data);
};
export default handleSubmit;
