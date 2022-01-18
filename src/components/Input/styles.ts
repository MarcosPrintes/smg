import styled from "styled-components";

export const Container = styled.label`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  margin-bottom: 15px;
  span {
    width: 50px;
    color: ${(props) => props.theme.colors.onBackground};
  }
  input {
    background: #edf1f5;
    border: unset;
    padding: 0.8rem 1rem;
    border-radius: 1rem;
    color: ${(props) => props.theme.colors.onBackground};
    cursor: pointer;
  }
`;
