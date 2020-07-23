import { callApi } from "utils/service.util";

import { API_MODULES, API_ROOT } from "constants/common";

export async function apiGetAllSubcategories() {
  const res: any = await callApi({
    url: `${API_ROOT}/category-insights`,
    params: {
      topic: 3,
    },
  });

  return res.data;
}

export async function apiGetProfile(name: string) {
  const res: any = await callApi({
    url: `${API_ROOT}/${API_MODULES.Profile}`,
    params: {
      name,
    },
  });

  return res.Profile;
}

export async function apiGetAllBreakingNews() {
  const res: any = await callApi({
    url: `${API_ROOT}/category-insights`,
    params: {
      topic: 3,
      breakingnews: 1,
    },
  });

  return res.data;
}

export async function apiGetAllSupplyChainKeySupplierNews() {
  const res: any = await callApi({
    url: `${API_ROOT}/supplier-management`,
    params: {
      topic: 3,
    },
  });

  return res.data;
}

export async function apiGetAllSupplierBreakingNews(company: string) {
  const res: any = await callApi({
    url: `${API_ROOT}/supplier-management`,
    params: {
      company,
      breakingnews: 1,
    },
  });

  return res.data;
}

export async function apiGetAllSupplierNews(company: string) {
  const res: any = await callApi({
    url: `${API_ROOT}/supplier-management`,
    params: {
      company,
    },
  });

  return res.data;
}
