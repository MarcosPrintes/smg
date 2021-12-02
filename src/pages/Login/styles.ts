import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
  max-width: 320px;

  input {
    background: transparent;
    font-size: 1rem;
    border: unset;
    border-bottom: 1px solid ${(props) => props.theme.colors.onBackground};
    margin-bottom: 30px;
    padding-bottom: 5px;
  }

  button {
    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.onBackground};
    color: ${(props) => props.theme.colors.onBackground};
    border-radius: 6px;
    font-size: 1.1rem;
    margin-top: 30px;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background: ${(props) => lighten(0.4, props.theme.colors.onBackground)};
    }
  }
`;
