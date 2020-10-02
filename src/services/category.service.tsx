import {callApi} from "utils/service.util";

import {API_ROOT} from "constants/common";

export async function apiGetCategoryNews(params: any = {}) {
  const res: any = await callApi({
    url: `${API_ROOT}/news`,
    params,
  });

  return res;
}

export async function apiGetMarketAnalysis(category_id: any) {
  const res: any = await callApi({
    url: `${API_ROOT}/news/?category_id=${category_id}&type=market-analysis`,
  });

  return [res];
}
