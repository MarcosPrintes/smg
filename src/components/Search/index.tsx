import { useState } from "react";
import { useTheme } from "styled-components";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container } from "./styles";

interface ISearchProps {
  onHandleSearch: (value: string) => void;
  isOnAsideMenu?: boolean;
}

export const Search = ({ onHandleSearch, isOnAsideMenu }: ISearchProps) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  function handleOnFocus(value: string) {
    setIsFocused(true);
  }

  function onHandleBlur(value: string) {
    if (!value) {
      setIsFocused(false);
    }
  }

  return (
    <Container className="search" isFocused={isFocused}>
      <input
        onBlur={(e) => onHandleBlur(e.target.value)}
        onFocus={(e) => handleOnFocus(e.target.value)}
        type="text"
        value={value}
        placeholder="Digite aqui uma palavra chave..."
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={(e) => {
          if (isOnAsideMenu) {
            onHandleSearch(value);
          } else {
            e.key === "Enter" && onHandleSearch(value);
          }
        }}
      />
      <button type="button" onClick={() => onHandleSearch(value)}>
        <FontAwesomeIcon
          color={isFocused ? theme.colors.primary : theme.colors.onBackground}
          icon={faSearch}
        />
      </button>
    </Container>
  );
};
