export interface IAuth {
  user?: any;
  hasLogin: boolean;
}

export enum Types {
  SET_USER = '[AUTH] SET_USER',
}

export interface SetUserAction {
  type: typeof Types.SET_USER;
  payload: { user: any };
}

export type Actions = SetUserAction;

