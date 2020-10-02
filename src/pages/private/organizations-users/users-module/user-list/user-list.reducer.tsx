import produce from "immer";

import { Types } from "./user-list.constant";
import { COMMON_STATUS_COMPONENT } from "constants/common";

const initialState: any = {
  ...COMMON_STATUS_COMPONENT,
  rowCount: 0,
  users: [],
  params: {
    keyword: "",
    page: 1,
    totalPage: 1,
    type: null,
  },
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case Types.LOAD_DATA:
      draft.isLoading = true;
      draft.params = { ...draft.params, ...action.payload.params };
      break;
    case Types.LOAD_DONE:
      draft.isFirstLoad = false;
      draft.isLoading = false;

      draft.userCaches = action.payload.users;
      draft.users = draft.userCaches.slice(0, 30);

      draft.params.page = 1;
      if (action.payload.users.length > 0) {
        draft.params.totalPage = Math.ceil(action.payload.users.length / 30);
      } else {
        draft.params.totalPage = 0;
      }
      draft.rowCount = action.payload.users.length;
      break;
    case Types.SET_DATA:
      draft.users = action.payload.users;

      break;
    case Types.UPDATE_USER:
      const index = draft.users.findIndex(
        (e: any) => e.id === action.payload.user.id
      );

      if (index < 0) {
        draft.users.unshift(action.payload.user);
      } else {
        draft.users[index] = action.payload.user;
      }

      const index1 = draft.userCaches.findIndex(
        (e: any) => e.id === action.payload.user.id
      );

      if (index1 < 0) {
        draft.userCaches.unshift(action.payload.user);
      } else {
        draft.userCaches[index1] = action.payload.user;
      }
      break;
    case Types.CHANGE_PAGE:
      draft.params.page = action.payload.page;
      break;
  }
}, initialState);

export default reducer;
