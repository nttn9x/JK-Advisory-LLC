import { callApi } from "utils/service.util";

import { API_ROOT } from "constants/common";

export async function apiGetAllAnalytics() {
  const res: any = await callApi({
    url: `${API_ROOT}/analytics`,
  });

  return res;
}

export async function apiDefaultAnalytic(chart_type?: any, id?: any) {
  const res: any = await callApi({
    url: `${API_ROOT}/graphs`,
    params: { chart_id: id, type: chart_type },
  });

  return res[0];;
}

export async function apiAnalytic(id?: any) {
  const res: any = await callApi({
    url: `${API_ROOT}/graphs/?type=analytic&chart_id=${id}`,
  });

  return res[0];;
}

export async function apiStockPrices(supplier?: any) {
  const res: any = await callApi({
    url: `${API_ROOT}/graphs/?type=stock-price&supplier=${supplier}`,
  });

  return res[0];
}

export async function apiSentiment(supplier?: any) {
  const res: any = await callApi({
    url: `${API_ROOT}/graphs/?type=sentiments&supplier=${supplier}`,
  });

  return res[0];
}
