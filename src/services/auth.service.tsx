import { callApi } from "utils/service.util";

import { API_ROOT } from "constants/common";

export async function login({ username, password }: any) {
  const res: any = await callApi({
    method: "post",
    url: `${API_ROOT}/users/login/`,
    data: { username, password },
  });

  return res;
}
