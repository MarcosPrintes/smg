export enum ActionTypesCategory {
  GET_GATEGORYS_REQUEST = "@categorys/GET_GATEGORYS_REQUEST",
  GET_GATEGORYS_SUCCESS = "@categorys/GET_GATEGORYS_SUCCESS",
  GET_GATEGORYS_FAIL = "@categorys/GET_GATEGORYS_FAIL",
}

export interface categorysSate {
  readonly list: Category[];
  readonly loading: boolean;
  readonly error: boolean;
  readonly last_page: number;
  readonly page: number;
  readonly total: number;

}

export interface Category {
  _id: string;
  name: string;
  esfera: string;
  poder: string;
  uuid: string;
  updated_at: string;
  created_at: string;
}
