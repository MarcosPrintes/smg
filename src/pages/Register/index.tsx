import { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { entities } from "@/helper/api";

import Select from "react-select";

import { toast } from "react-toastify";

import {
  Container,
  Form,
  LoginButton,
  FormRow,
  BackToLoginButton,
} from "./styles";

import Logo from "@/assets/images/logo-color.png";
import { register as apiRegister } from "@/helper/api";

import { ReactComponent as Spinner } from "@/assets/images/icons/spinner.svg";
import { AxiosError } from "axios";
interface IFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  entity: string;
}

interface ErrorRegister {
  message: string;
  errors: {
    email: string[];
  };
}

const registerFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve conter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
  entity: yup.string().required("Entidade é obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As Senhas não conferem")
    .required("Confirmação de senha obrigatória"),
});

export const Register = () => {
  const [entitiesList, setEntitiesList] = useState([]);
  const [isLoadingEntities, setisLoadingEntities] = useState(false);
  const [isLoadingRegister, setisLoadingRegister] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(registerFormSchema),
  });

  useEffect(() => {
    getEntities();

    async function getEntities() {
      setisLoadingEntities(true);
      try {
        const response = await entities().finally(() =>
          setisLoadingEntities(false)
        );
        const list = response.data.data;
        const options = list.map((item: any) => ({
          label: item.name,
          value: item._id,
        }));
        setEntitiesList(options);
      } catch (error) {}
    }
  }, []);

  function handleSetEntity(value: { label: string; value: string } | null) {
    value && setValue("entity", value.value);
  }

  const onSubmit = async ({ name, email, password, entity }: IFormInputs) => {
    try {
      setisLoadingRegister(true);
      const response = await apiRegister({
        name: name,
        email: email,
        password: password,
        entity_id: entity,
      }).finally(() => setisLoadingRegister(false));
      toast.success("Cadastro realizado com sucesso");
      return response;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response?.data) {
        const errorRegister = err.response.data as ErrorRegister;
        toast.error(errorRegister.message);
        if (errorRegister) {
          Object.entries(errorRegister.errors).forEach(([key, value]) => {
            value.map((message) => toast.error(message));
          });
        }
      }
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

          <Select
            options={entitiesList}
            isClearable
            {...register("entity")}
            onChange={(value) => handleSetEntity(value)}
            isLoading={isLoadingEntities}
            placeholder="Selecione uma entidade"
            isSearchable
          />
          <p>{errors.entity?.message}</p>
        </FormRow>
        <LoginButton type="submit">
          {isLoadingRegister ? (
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
            "Cadastrar"
          )}
        </LoginButton>
        <BackToLoginButton to="/"> Voltar para o login </BackToLoginButton>
      </Form>
    </Container>
  );
};
