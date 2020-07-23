import { callApi } from "utils/service.util";

import { API_MODULES, API_ROOT } from "constants/common";

export async function apiGetArticle(params: any = {}) {
  const res: any = await callApi({
    url: `${API_ROOT}/${API_MODULES.Articles}`,
    params,
  });

  return res && res.data && res.data.length > 0 ? res.data[0] : {};
}
