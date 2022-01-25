import { action } from "typesafe-actions";
import { ActionTypesRegister } from "./types";
import { IRegister } from "@/helper/api";

export const actionRegister = (payload: IRegister) =>
  action(ActionTypesRegister.REGISTER_REQUEST, payload);
