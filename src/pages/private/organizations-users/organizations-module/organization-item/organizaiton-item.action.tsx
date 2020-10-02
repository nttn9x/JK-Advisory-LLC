import { Types } from "./organizaiton-item.constant";

export function setSaving(isSaving: boolean) {
  return { type: Types.SET_SAVING, payload: { isSaving } };
}

export function showEditPopup(
  organization: any = { name: "", active: true },
  index: number = -1
) {
  return { type: Types.SHOW_EDIT_POPUP, payload: { organization, index } };
}

export function hideEditPopup() {
  return { type: Types.HIDE_EDIT_POPUP };
}

export function saveOrganization(organization: any) {
  return { type: Types.SAVE_ORGANIZATION, payload: { organization } };
}
