import {callApi} from "utils/service.util";

import {API_ROOT} from "constants/common";

export async function apiGetArticle(params: any = {}) {
  const res: any = await callApi({
    url: `${API_ROOT}/news`,
    params,
  });

  return res && res.data && res.data.length > 0 ? res.data[0] : {};
}
