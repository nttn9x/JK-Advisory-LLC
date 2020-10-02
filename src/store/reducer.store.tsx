import { combineReducers } from "redux";

import auth from "./modules/auth/auth.reducer";
import snackbars from "./modules/snackbar/snackbar.reducer";
import layout from "./modules/layout/layout.reducer";

import organizationList from "pages/private/organizations-users/organizations-module/organization-list/organizaiton-list.reducer";
import organizationItem from "pages/private/organizations-users/organizations-module/organization-item/organizaiton-item.reducer";
import userList from "pages/private/organizations-users/users-module/user-list/user-list.reducer";
import userItem from "pages/private/organizations-users/users-module/user-item/user-item.reducer";

const common = combineReducers({ snackbars, layout });

const organizations = combineReducers({
  userItem,
  userList,
  organizationItem,
  organizationList,
});

const root = {
  auth,
  common,

  organizations,
};

export default root;
