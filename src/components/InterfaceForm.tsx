import { useState } from "react";
import Client from "./core/Client";
import InputForm from "./InputForm";
import NewClientButton from "./NewClientButton";

interface interfaceFormProps {
  client: Client;
  calledoff?: () => void;
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
      <div className="flex justify-end mt-7">
        <NewClientButton hue="blue" className="mr-2">
          {id ? "Edit" : "Save"}
        </NewClientButton>
        <NewClientButton onClick={props.calledoff}>Cancel</NewClientButton>
      </div>
    </div>
  );
}
