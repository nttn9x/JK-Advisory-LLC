import { callApi } from "utils/service.util";

import { API_MODULES, API_ROOT } from "constants/common";

export async function apiGetInsights(params: any = {}) {
  const res: any = await callApi({
    url: `${API_ROOT}/news/${API_MODULES.Insights}`,
    params,
  });

  return res.data;
}
