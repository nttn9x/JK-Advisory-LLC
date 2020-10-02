import { HideSideBarAction, ShowSideBarAction, Types } from "./layout.constant";

import { SIDEBAR } from "constants/common";

import { setItem } from "utils/localstorage";

export function showSidebar(): ShowSideBarAction {
  setItem(SIDEBAR, false);

  return { type: Types.OPEN_SIDEBAR };
}

export function hideSidebar(): HideSideBarAction {
  setItem(SIDEBAR, true);

  return { type: Types.HIDE_SIDEBAR };
}
