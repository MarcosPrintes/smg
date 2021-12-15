import { InputHTMLAttributes, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { Container } from "./style";

interface CheckIconProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  icon: IconDefinition;
  checkedColor: string;
  onChangeHandler: (active: boolean) => void;
}

export const CheckIcon = ({
  icon,
  checkedColor,
  id,
  onChangeHandler,
  ...rest
}: CheckIconProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container htmlFor={id} checkedColor={checkedColor}>
      <input
        ref={inputRef}
        onChange={(e) => onChangeHandler(e.target.checked)}
        type="checkbox"
        {...rest}
        id={id}
      />
      <FontAwesomeIcon className="check-icon" icon={icon} size="2x" />
    </Container>
  );
};
