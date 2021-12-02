import { useState } from "react";
import { Container, Form } from "./styles";

import { useDispatch } from "react-redux";
import { actionLoginRequest } from "@/store/ducks/user/actions";

import Logo from "@/assets/images/logo-color.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(
      actionLoginRequest({
        name: "Diego Vissini",
        password: "87654321",
        email: "diego@vissini.com.br",
      })
    );
  }

  return (
    <Container>
      <img src={Logo} alt="Social Media Gov" />
      <Form>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Entrar
        </button>
      </Form>
    </Container>
  );
};
