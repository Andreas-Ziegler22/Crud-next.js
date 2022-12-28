interface InputFormProps {
  type?: "text" | "number";
  text: string;
  value: any;
  onlyread?: boolean;
  className?: string;
  ValueChange?: (value: any) => void;
}

export default function InputForm(props: InputFormProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.text}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.onlyread}
        onChange={(e) => props.ValueChange?.(e.target.value)}
        className={`border border-purple-500 
        rounded-lg focus:outline-none bg-gray-100 px-4 py-2 ${
          props.onlyread ? "" : "focus:bg-white"
        }
        
        `}
      />
    </div>
  );
}
