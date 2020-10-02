import { IAuth } from "./modules/auth/auth.constant";
import { ILayout } from "./modules/layout/layout.constant";

export interface IState {
  auth: IAuth;
  common: {
    layout: ILayout;
  };
}
