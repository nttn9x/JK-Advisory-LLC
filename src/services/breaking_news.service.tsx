import { callApi } from "../utils/service.util";
import { API_ROOT, API_MODULES } from "../constants/common";

export async function apiGetBreakingNews(params: any = {}) {
  const res: any = await callApi({
    url: `${API_ROOT}/news/${API_MODULES.BreakingNews}`,
    params,
  });
  return res.data;
}

export async function apiGetBreakingNewsByNameList(data: any = {}) {
  const res: any = await callApi({
    url: `${API_ROOT}/news/${API_MODULES.BreakingNews}`,
    method: "POST",
    data,
  });
  return res.data;
}
