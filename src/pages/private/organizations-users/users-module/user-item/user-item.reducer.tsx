import produce from "immer";

import { Types } from "./user-item.constant";

const initialState: any = {
  isSaving: false,
  openEditPopup: false,
  user: null,
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case Types.SET_SAVING:
      draft.isSaving = action.payload.isSaving;
      break;
    case Types.SHOW_EDIT_POPUP:
      draft.user = action.payload.user;
      draft.openEditPopup = true;
      break;
    case Types.HIDE_EDIT_POPUP:
      draft.openEditPopup = false;
      draft.isSaving = false;
      draft.user = null;
      break;
  }
}, initialState);

export default reducer;
