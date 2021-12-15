import { InputHTMLAttributes, useState } from "react";
// import { useTheme } from "styled-components";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { Container, CheckboxContainer } from "./styles";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Category } from "@/store/ducks/categorys/types";
interface CheckTextProps extends InputHTMLAttributes<HTMLInputElement> {
  option: Category;
}

export const CheckText = ({ option, ...rest }: CheckTextProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isActive, setIsActive] = useState(false);
//   const theme = useTheme();

  function handleOnChange(checked: boolean) {
    setIsActive(checked);
  }

  return (
    <Container className="check-text">
      <CheckboxContainer htmlFor={option._id}>
        <input
          onChange={(e) => handleOnChange(e.target.checked)}
          type="checkbox"
          id={option._id}
          {...rest}
        />
        <span>{option.name}</span>
        {/* <FontAwesomeIcon className="check-icon" color={theme.colors.primary} icon={faCheck} /> */}
      </CheckboxContainer>
      {/* {option.types && (
        <Types isActive={isActive}>
          {option.types.map((type) => (
            <CheckboxContainer key={type.id} htmlFor={type.id}>
              <input type="checkbox" id={type.id} {...rest} />
              <span>{type.title}</span>
              <FontAwesomeIcon className="check-icon" color={theme.colors.primary} icon={faCheck} /> 
            </CheckboxContainer>
          ))}
        </Types>
      )} */}
    </Container>
  );
};
