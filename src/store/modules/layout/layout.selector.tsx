import { IState } from "store/constants";

export const layoutSelector = (state: IState) => {
  return state.common.layout;
};
