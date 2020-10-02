import produce from "immer";

import { Types } from "./organization-list.constant";
import { COMMON_STATUS_COMPONENT } from "constants/common";

const initialState: any = {
  ...COMMON_STATUS_COMPONENT,
  selectedOrganization: {
    index: -1,
    // organization: null,
    organization: {
      id: "5dd3ea19e96565001e9acc15",
      name: "Home Sweet Home Home Sweet Home Home Sweet Home Home Sweet Home",
    },
  },
  rowCount: 0,
  organizations: [],
  params: {},
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case Types.SET_DATA:
      draft.organizations = action.payload.organizations;
      draft.rowCount = action.payload.organizations.length;
      draft.isLoading = false;
      draft.isFirstLoad = false;
      break;
    case Types.LOAD_DATA:
      draft.params = { ...draft.params, ...action.payload.params };
      draft.isLoading = true;
      draft.selectedOrganization.index = -1;
      draft.selectedOrganization.organization = null;
      break;
    case Types.UPDATE_ORGANIZATION:
      if (action.payload.index < 0) {
        draft.organizations.unshift(action.payload.organization);
      } else {
        draft.organizations[action.payload.index] = action.payload.organization;
      }
      break;
    case Types.SELECT_ORGANIZATION:
      if (draft.selectedOrganization.index === action.payload.index) {
        draft.selectedOrganization.index = -1;
        draft.selectedOrganization.organization = null;
      } else {
        draft.selectedOrganization.index = action.payload.index;
        draft.selectedOrganization.organization = action.payload.organization;
      }
      break;
  }
}, initialState);

export default reducer;
