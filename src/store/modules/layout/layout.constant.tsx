export interface ILayout {
  close: boolean;
}

export enum Types {
  OPEN_SIDEBAR = "[LAYOUT] OPEN SIDE BAR",
  HIDE_SIDEBAR = "[LAYOUT] OPEHIDEN SIDE BAR",
}

export interface ShowSideBarAction {
  type: typeof Types.OPEN_SIDEBAR;
}

export interface HideSideBarAction {
  type: typeof Types.HIDE_SIDEBAR;
}

export type Actions = ShowSideBarAction | HideSideBarAction;
