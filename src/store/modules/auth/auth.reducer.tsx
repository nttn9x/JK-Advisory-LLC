import produce from "immer";

import { Actions, IAuth, Types } from "./auth.constant";

import { getUser } from "utils/auth.util";

const user = getUser();

const initialState: IAuth = {
  user,
  hasLogin: !!user,
};

const reducer = produce((draft, action: Actions) => {
  switch (action.type) {
    case Types.SET_USER:
      draft.hasLogin = !!action.payload.user;
      draft.user = action.payload.user;
      break;
  }
}, initialState);

export { initialState, reducer as default };
