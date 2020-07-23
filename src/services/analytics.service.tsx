import { callApi } from "utils/service.util";

import { API_ROOT } from "constants/common";

export async function apiGetAllAnalytics() {
  const res: any = await callApi({
    url: `${API_ROOT}/analytics`,
  });

  return res;
}

export async function apiDefaultAnalytic(category_name?: any, id?: any) {
  const res: any = await callApi({
    url: `${API_ROOT}/graphs/${category_name}`,
    params: { id },
  });

  return res.data[0];
}

export async function apiAnalytic(id?: any) {
  const res: any = await callApi({
    url: `${API_ROOT}/graphs/analytics`,
    params: { id },
  });

  return res.data[0];
}

export async function apiStockPrices(supplier?: any) {
  const res: any = await callApi({
    url: `${API_ROOT}/stockprices`,
    params: { supplier },
  });

  return res.data[0];
}

export async function apiSentiment(supplier?: any) {
  const res: any = await callApi({
    url: `${API_ROOT}/sentiments`,
    params: { supplier },
  });

  return res.data[0];
}
