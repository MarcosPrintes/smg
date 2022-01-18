import { useState, useEffect } from "react";
import { Container, Form } from "./styles";

import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";

import { actionLoginRequest, actionLogout } from "@/store/ducks/user/actions";
import { State } from "@/store";

import Logo from "@/assets/images/logo-color.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { error } = useSelector(({ user }: State) => user);

  /**
    name: "Diego Vissini",
    password: "87654321",
    email: "diego@vissini.com.br",
   */
  function handleSubmit() {
    dispatch(
      actionLoginRequest({
        email: email,
        password: password,
      })
    );
  }

  useEffect(() => {
    if (error) {
      toast.error("Email ou senha inválida");
      dispatch(actionLogout());
    }
  }, [error]);

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
