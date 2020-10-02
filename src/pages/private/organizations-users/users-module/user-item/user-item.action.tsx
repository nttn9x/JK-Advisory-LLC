import { Types } from "./user-item.constant";

export function setSaving(isSaving: boolean) {
  return { type: Types.SET_SAVING, payload: { isSaving } };
}

export function showEditPopup(
  user: any = {
    username: "",
    password: "",
    last_name: "",
    first_name: "",
    organization_id: "",
    active: true,
  }
) {
  return { type: Types.SHOW_EDIT_POPUP, payload: { user } };
}

export function hideEditPopup() {
  return { type: Types.HIDE_EDIT_POPUP };
}

export function saveUser(user: any) {
  return { type: Types.SAVE_USER, payload: { user } };
}
