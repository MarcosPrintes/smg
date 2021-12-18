export enum ActionTypesUser {
  USER_LOGIN_REQUEST = "@user/USER_LOGIN_REQUEST",
  USER_LOGIN_SUCCESS = "@user/USER_LOGIN_SUCCESS",
  USER_LOGIN_FAIL = "@user/USER_LOGIN_FAIL",
  USER_LOGOUT = "@user/USER_LOGOUT",
}

/**
 * Data types
 */
export interface LoginResponse {
  access_token: string;
  token_type: "Bearer";
  user: {
    _id: number;
    name: string;
    email: string;
  };
}

export interface User {
  name: string;
  password: string;
  email: string;
}

/**
 * State type
 */

export interface UserState {
  readonly data: LoginResponse;
  readonly loading: boolean;
  readonly error: boolean;
}
