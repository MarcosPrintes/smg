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
    background: transparent;
    font-size: 1rem;
    border: unset;
    border-bottom: 1px solid ${(props) => props.theme.colors.onBackground};
    margin-bottom: 30px;
    padding-bottom: 5px;
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

export const ResetPasswordButton = styled.button`
  background: transparent;
  border: unset;
  margin-top: 2rem;
  text-decoration: underline;
  cursor: pointer;
  color: ${(props) => props.theme.colors.onBackground};
  font-size: 1.1rem;
`;

export const ToRegisterButton = styled(Link)`
  background: transparent;
  border: unset;
  margin-top: 2rem;
  text-decoration: underline;
  cursor: pointer;
  color: ${(props) => props.theme.colors.onBackground};
  font-size: 1.1rem;
  display: block;
  margin: 1rem auto;
`;
