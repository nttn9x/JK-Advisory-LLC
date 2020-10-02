import produce from "immer";

import { Types } from "./organizaiton-item.constant";

const initialState: any = {
  isSaving: false,
  openEditPopup: false,
  index: -1,
  organization: null,
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case Types.SET_SAVING:
      draft.isSaving = action.payload.isSaving;
      break;
    case Types.SHOW_EDIT_POPUP:
      draft.organization = action.payload.organization;
      draft.index = action.payload.index;
      draft.openEditPopup = true;
      break;
    case Types.HIDE_EDIT_POPUP:
      draft.openEditPopup = false;
      draft.isSaving = false;
      draft.index = -1;
      draft.organization = null;
      break;
  }
}, initialState);

export default reducer;
