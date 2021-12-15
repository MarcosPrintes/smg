import { action } from "typesafe-actions";
import { ActionTypesCategory, Category} from "./types";

export const actionGetCategorys = () =>
  action(ActionTypesCategory.GET_GATEGORYS_REQUEST);

export const actionGetCategorysSuccess = (payload: Category[]) =>
  action(ActionTypesCategory.GET_GATEGORYS_SUCCESS, payload);

export const actionGetCategorysFail = () =>
  action(ActionTypesCategory.GET_GATEGORYS_FAIL);
