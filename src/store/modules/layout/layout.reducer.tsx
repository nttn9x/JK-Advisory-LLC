import produce from "immer";

import { SIDEBAR } from "constants/common";
import { getItem } from "utils/localstorage";

import { Actions, ILayout, Types } from "./layout.constant";

const initialState: ILayout = {
  close: getItem(SIDEBAR),
};

const reducer = produce((draft, action: Actions) => {
  switch (action.type) {
    case Types.OPEN_SIDEBAR:
      draft.close = false;
      break;
    case Types.HIDE_SIDEBAR:
      draft.close = true;
      break;
  }
}, initialState);

export { initialState, reducer as default };
