interface InputFormProps {
  type?: "text" | "number";
  text: string;
  value: any;
  onlyread?: boolean;
  ValueChange?: (value: any) => void;
}

export default function InputForm(props: InputFormProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-4">{props.text}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.onlyread}
        onChange={(e) => props.ValueChange?.(e.target.value)}
        className={`border-purple-500 
        rounded-lg focus:outline-none bg-gray-100 px-4 py-2 ${
          props.onlyread ? "" : "focus:bg-white"
        }
        
        `}
      />
    </div>
  );
}
