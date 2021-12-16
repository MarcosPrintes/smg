import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isLoading?: boolean;
}

export const Button = ({ title, isLoading, ...rest }: ButtonProps) => {
  return (
    <Container disabled={isLoading} {...rest}>
      {title}
    </Container>
  );
};
