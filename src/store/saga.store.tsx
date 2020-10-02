import { all } from "redux-saga/effects";

import organizationList from "pages/private/organizations-users/organizations-module/organization-list/organization-list.saga";
import organizationItem from "pages/private/organizations-users/organizations-module/organization-item/organizaiton-item.saga";
import userList from "pages/private/organizations-users/users-module/user-list/user-list.saga";
import userItem from "pages/private/organizations-users/users-module/user-item/user-item.saga";

export default function* root() {
  yield all([organizationList(), organizationItem(), userList(), userItem()]);
}
