import { Types, SetUserAction } from './auth.constant';

export function setUser(user?: any): SetUserAction {
  return { type: Types.SET_USER, payload: { user } };
}
