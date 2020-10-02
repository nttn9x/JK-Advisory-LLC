import { callApi } from "utils/service.util";

import { API_MODULES } from "constants/common";

export function getAllOrganization(params?: any) {
  return callApi({ url: `${API_MODULES.Organizations}`, params });
}

export function createOrganization(data: any) {
  return callApi({
    url: `${API_MODULES.Organizations}/`,
    method: "POST",
    data,
  });
}

export function updateOrganization(data: any) {
  return callApi({
    url: `${API_MODULES.Organizations}/${data.id}`,
    method: "PUT",
    data,
  });
}
