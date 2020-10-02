import { Types } from "../user-list.constant";

export function loadDone(users: any) {
  return { type: Types.LOAD_DONE, payload: { users } };
}

export function setData(users: any) {
  return { type: Types.SET_DATA, payload: { users } };
}

export function loadData(params: any = {}) {
  return { type: Types.LOAD_DATA, payload: { params } };
}

export function updateUser(user: any) {
  return { type: Types.UPDATE_USER, payload: { user } };
}

export function changePage(page: number) {
  return { type: Types.CHANGE_PAGE, payload: { page } };
}
