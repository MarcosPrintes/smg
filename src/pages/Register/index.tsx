import {
  Container,
  Form,
  LoginButton,
  FormRow,
  BackToLoginButton,
} from "./styles";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Logo from "@/assets/images/logo-color.png";
import { register as apiRegister } from "@/helper/api";

interface IFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const registerFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve conter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As Senhas não conferem")
    .required("Confirmação de senha obrigatória"),
});

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(registerFormSchema),
  });

  const onSubmit = async ({ name, email, password }: IFormInputs) => {
    try {
      const response = await apiRegister({
        name: name,
        email: email,
        password: password,
      });
      return response;
    } catch (error) {
      return error;
    }
  };

  return (
    <Container>
      <img src={Logo} alt="Social Media Gov" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <input type="text" placeholder="Nome" {...register("name")} />
          <p>{errors.name?.message}</p>
        </FormRow>

        <FormRow>
          <input type="text" placeholder="E-mail" {...register("email")} />
          <p>{errors.email?.message}</p>
        </FormRow>

        <FormRow>
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </FormRow>

        <FormRow>
          <input
            type="password"
            placeholder="Confirmar senha"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>
        </FormRow>

        <LoginButton type="submit">Registrar</LoginButton>
        <BackToLoginButton to="/"> Voltar para o login </BackToLoginButton>
      </Form>
    </Container>
  );
};
