import { all } from "redux-saga/effects";

import organizationList from "./organizations-module/organization-list/organization-list.saga";
import organizationItem from "./organizations-module/organization-item/organizaiton-item.saga";
import userList from "./users-module/user-list/user-list.saga";
import userItem from "./users-module/user-item/user-item.saga";

export default function* rootSaga() {
  yield all([organizationList(), organizationItem(), userList(), userItem()]);
}
