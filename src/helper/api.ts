import { MentionsRequestParams } from "./../store/ducks/mentions/types";
import { LoginResponse, User } from "@/store/ducks/user/types";
import axios, { AxiosRequestHeaders } from "axios";

const API =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_DEV_URL
    : process.env.REACT_APP_API_PROD_URL;

interface ConfigHeaderType extends AxiosRequestHeaders {
  "Content-Type": string;
  Accept: string;
}

const configHeaders: ConfigHeaderType = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const api = axios.create({
  headers: configHeaders,
  baseURL: API,
});

export const login = async (data: User): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/api/login", data);

  return response.data;
};

export const mentions = async (
  token: string,
  requesParams: MentionsRequestParams
) => {
  const response = await api.get("/api/v1/mentions", {
    params: requesParams,
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

export const categorys = async (token: string) => {
  const response = await api.get("/api/v1/categories", {
    params: { per_page: 100 },
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

export const retrievePasswordEmail = async (email: string) => {
  const response = await api.post("api/password/email", { email });

  return response.data;
};

export interface IRegister {
  name: string;
  password: string;
  email: string;
  entity_id?: number;
}

export const register = async (body: IRegister) => {
  const response = await api.post("api/register", body);

  return response.data;
};
