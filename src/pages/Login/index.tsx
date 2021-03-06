import { useState, useEffect } from "react";
import {
  Container,
  Form,
  LoginButton,
  ResetPasswordButton,
  ToRegisterButton,
} from "./styles";

import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";

import { actionLoginRequest, actionLogout } from "@/store/ducks/user/actions";
import { State } from "@/store";

import Logo from "@/assets/images/logo-color.png";
import { ReactComponent as Spinner } from "@/assets/images/icons/spinner.svg";
import { retrievePasswordEmail } from "@/helper/api";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRretrievePassword, setIsRretrievePassword] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const dispatch = useDispatch();
  const { error, loading } = useSelector(({ user }: State) => user);

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
  }, [error, dispatch]);

  async function handleEmail() {
    if (email) {
      try {
        setIsSendingEmail(true);
        await retrievePasswordEmail(email);
        toast.success(
          "Enviamos um link para recuperação de senha para o email informado"
        );
        setIsSendingEmail(false);
      } catch (error) {
        setIsSendingEmail(false);
        toast.error("Não foi possível enviar o email");
      }
    }
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

        {!isRretrievePassword && (
          <>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <LoginButton type="button" onClick={handleSubmit}>
              {loading ? (
                <Spinner
                  style={{
                    width: 30,
                    height: 30,
                    margin: "0 auto",
                    display: "block",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ) : (
                "Entrar"
              )}
            </LoginButton>

            <ToRegisterButton to="/register">Registrar</ToRegisterButton>
          </>
        )}

        {!isRretrievePassword && (
          <ResetPasswordButton
            type="button"
            onClick={() => setIsRretrievePassword(true)}
          >
            Recuperar senha
          </ResetPasswordButton>
        )}

        {isRretrievePassword && (
          <>
            <LoginButton type="button" onClick={() => handleEmail()}>
              {isSendingEmail ? (
                <Spinner
                  style={{
                    width: 30,
                    height: 30,
                    margin: "0 auto",
                    display: "block",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ) : (
                "Enviar email"
              )}
            </LoginButton>
            <ResetPasswordButton
              type="button"
              onClick={() => setIsRretrievePassword(false)}
            >
              Voltar para o login
            </ResetPasswordButton>
          </>
        )}
      </Form>
    </Container>
  );
};
