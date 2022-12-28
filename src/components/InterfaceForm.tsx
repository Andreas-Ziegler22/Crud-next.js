import { useState } from "react";
import Client from "./core/Client";
import InputForm from "./InputForm";

interface interfaceFormProps {
  client: Client;
}

export default function InterfaceForm(props: interfaceFormProps) {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.name ?? 0);
  return (
    <div>
      {id ? <InputForm onlyread text="ID" value={id} /> : false}
      <InputForm text="Name:" value={name} />
      <InputForm text="Age:" type="number" value={age} />
    </div>
  );
}
