import { action } from "typesafe-actions";
import { ActionTypesUser, LoginResponse, User } from "./types";

export const actionLoginRequest = (user: User) =>
  action(ActionTypesUser.USER_LOGIN_REQUEST, user);

export const actionLoginSuccess = (loginResponse: LoginResponse) =>
  action(ActionTypesUser.USER_LOGIN_SUCCESS, loginResponse);

export const actionLoginFail = () => action(ActionTypesUser.USER_LOGIN_FAIL);

export const actionLogout = () => action(ActionTypesUser.USER_LOGOUT);
