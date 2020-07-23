import { callApi } from "utils/service.util";

import { API_MODULES, API_ROOT } from "constants/common";

export async function apiGetCategoryNews(params: any = {}) {
  const res: any = await callApi({
    url: `${API_ROOT}/news/${API_MODULES.Category}`,
    params,
  });

  return res.data;
}

export async function apiGetMarketAnalysis(type: any) {
  const res: any = await callApi({
    url: `${API_ROOT}/category-analysis/${type}`,
  });

  return res.data;
}
