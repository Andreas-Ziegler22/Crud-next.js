interface ButtonProps {
  hue?: "green" | "blue" | "gray";
  className?: string;
  children: any;
  onClick?: () => void;
}

export default function NewClientButton(props: ButtonProps) {
  const hue = props.hue ?? "gray";
  return (
    <button
      onClick={props.onClick}
      className={`bg-gradient-to-r from-${hue}-400 to-${hue}-700 text-white px-4 py-2 rounded-md ${props.className}`}
    >
      {props.children}
    </button>
  );
}
