import { callApi } from "utils/service.util";

import { API_MODULES, API_ROOT } from "constants/common";

export async function apiGetAllSuppliers(params: any = {}) {
  const res: any = await callApi({
    url: `${API_ROOT}/${API_MODULES.Suppliers}`,
    params,
  });

  return res;
}

export async function apiPutSupplier(data: any = {}) {
  const res: any = await callApi({
    method: "PUT",
    url: `${API_ROOT}/${API_MODULES.Suppliers}`,
    data,
  });

  return res.data;
}

export async function apiGetKeySupplierNews(params: any = {}) {
  const res: any = await callApi({
    url: `${API_ROOT}/news`,
    params,
  });

  return res;
}

export async function apiGetThirdRiskManagements(data: any = {}) {
  const res: any = await callApi({
    method: "POST",
    url: `${API_ROOT}/news/?type=insights`,
    data,
  });

  return res;
}
