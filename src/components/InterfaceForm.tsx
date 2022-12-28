import { useState } from "react";
import Client from "./core/Client";
import InputForm from "./InputForm";

interface interfaceFormProps {
  cliente: Client;
}

export default function InterfaceForm(props: interfaceFormProps) {
  const [name, setName] = useState();
  return (
    <div>
      <InputForm text="Name:" value="Test" />
      <InputForm text="Age:" type="number" value="Test" />
    </div>
  );
}
