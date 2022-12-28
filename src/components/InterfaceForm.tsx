import InputForm from "./InputForm";

interface interfaceFormProps {}

export default function InterfaceForm(props: interfaceFormProps) {
  return (
    <div>
      <InputForm text="name" value="Test" />
    </div>
  );
}
