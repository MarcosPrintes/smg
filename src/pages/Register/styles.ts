import styled from "styled-components";
import { Link } from "react-router-dom";
import { lighten } from "polished";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > img {
    max-width: 80%;
    display: block;
    margin-bottom: 3rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
  max-width: 320px;
  input {
    width: 100%;
    background: transparent;
    font-size: 1rem;
    border: unset;
    border-bottom: 1px solid ${(props) => props.theme.colors.onBackground};
    margin-bottom: 0.5rem;
    padding-bottom: 1px;
  }
`;

export const FormRow = styled.div`
  margin-bottom: 1rem;
  p {
    font-size: 10px;
    color: ${(props) => props.theme.colors.youtube};
  }
`;

export const LoginButton = styled.button`
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.onBackground};
  color: ${(props) => props.theme.colors.onBackground};
  border-radius: 6px;
  font-size: 1.1rem;
  margin-top: 30px;
  padding: 10px;
  height: 45px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  &:hover {
    background: ${(props) => lighten(0.4, props.theme.colors.onBackground)};
  }
`;

export const BackToLoginButton = styled(Link)`
  background: transparent;
  border: unset;
  margin-top: 2rem;
  text-decoration: underline;
  cursor: pointer;
  color: ${(props) => props.theme.colors.onBackground};
  font-size: 1.1rem;
  display: block;
  margin: 2rem auto 0;
`;
