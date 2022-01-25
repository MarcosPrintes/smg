import { actionRegister } from "./actions";
import { register } from "@/helper/api";
import { call } from "redux-saga/effects";

export function* sagaRegister({
  payload,
}: ReturnType<typeof actionRegister>): Generator {
  try {
    const response = yield call(register, payload);
    
    return response;
  } catch (error) {
    return error;
  }
}
