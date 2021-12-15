import { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
}

export const Input = ({ label, id, ...rest }: InputProps) => {
  return (
    <Container htmlFor={id}>
      {label && <span> {label} </span>}
      <input {...rest} id={id} />
    </Container>
  );
};
