import { callApi } from "utils/service.util";

import { API_MODULES, API_ROOT } from "constants/common";

export async function apiGetAllCategories() {
  const res: any = await callApi({url:`${API_ROOT}/${API_MODULES.CategoryNameNews}`});

  return res.data;
}

