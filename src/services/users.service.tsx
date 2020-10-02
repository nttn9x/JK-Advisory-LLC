import { callApi } from "utils/service.util";

import { API_MODULES } from "constants/common";

export function getAllUser(params?: any) {
  return callApi({ url: `${API_MODULES.Users}`, params });
}

export function getUserByUsername(username: string) {
  return callApi({
    url: `${API_MODULES.Users}/find/user`,
    params: { username },
  });
}

export function getUserById(userId: string) {
  return callApi({ url: `${API_MODULES.Users}/${userId}` });
}

export function saveUser(data: any) {
  return callApi({
    url: `${API_MODULES.Users}/`,
    method: "POST",
    data,
  });
}

export function updateUser(data: any) {
  return callApi({
    url: `${API_MODULES.Users}/${data.id}`,
    method: "PUT",
    data,
  });
}
