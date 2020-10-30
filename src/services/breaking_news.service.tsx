import { callApi } from "../utils/service.util";
import { API_ROOT } from "../constants/common";

export async function apiGetBreakingNews(params: any = {}) {
  const res: any = await callApi({
    url: `${API_ROOT}/news`,
    params,
  });
  return res;
}

export async function apiGetBreakingNewsByNameList(data: any = {}) {
  const res: any = await callApi({
    url: `${API_ROOT}/news/?type=breakingnews`,
    method: "POST",
    data,
  });
  return res;
}
