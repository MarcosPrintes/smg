import { LoginResponse, User } from "@/store/ducks/user/types";
import axios from "axios";

const API = "http://api.hom.socialmediagov.com.br"; 

export const api = axios.create({
  baseURL: API,
});

export const login = async (data: User): Promise<LoginResponse> => {
  console.log("veio no login", data);
  const response = await api.post<LoginResponse>("/api/login", data);

  return response.data;
};
