import { Types } from "./organization-list.constant";

export function setData(organizations: any) {
  return { type: Types.SET_DATA, payload: { organizations } };
}

export function loadData(params: any = {}) {
  return { type: Types.LOAD_DATA, payload: { params } };
}

export function updateOrganization(index: number, organization: any) {
  return { type: Types.UPDATE_ORGANIZATION, payload: { index, organization } };
}

export function selectOrganization(index: number = -1, organization: any = {}) {
  return { type: Types.SELECT_ORGANIZATION, payload: { index, organization } };
}
