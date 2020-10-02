import { combineReducers } from "redux";

import organizationList from "./organizations-module/organization-list/organizaiton-list.reducer";
import organizationItem from "./organizations-module/organization-item/organizaiton-item.reducer";
import userList from "./users-module/user-list/user-list.reducer";
import userItem from "./users-module/user-item/user-item.reducer";

const batches = combineReducers({
  userItem,
  userList,
  organizationItem,
  organizationList,
});

export default batches;
