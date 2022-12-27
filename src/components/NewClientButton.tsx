interface ButtonProps {
  hue?: "green" | "blue" | "gray";
  children: any;
}

export default function NewClientButton(props: ButtonProps) {
  return <button>{props.children}</button>;
}
