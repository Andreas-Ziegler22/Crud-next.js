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
      {id ? (
        <InputForm onlyread text="ID" value={id} className="mb-5" />
      ) : (
        false
      )}
      <InputForm
        text="Name:"
        value={name}
        ValueChange={setName}
        className="mb-5"
      />
      <InputForm text="Age:" type="number" value={age} ValueChange={setAge} />
    </div>
  );
}
