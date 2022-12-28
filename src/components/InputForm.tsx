interface InputFormProps {
  type?: "text" | "number";
  text: string;
  value: any;
  onlyread?: boolean;
}

export default function InputForm(props: InputFormProps) {
  return (
    <div>
      <label>{props.text}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.onlyread}
      />
    </div>
  );
}
