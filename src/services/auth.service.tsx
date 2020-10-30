import { API_ROOT } from "constants/common";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export async function login({ username, password }: any) {
  return fetch(`${API_ROOT}/users/login/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ username, password }),
  })
    .then((res) => {
      console.log(res.headers); // undefined
      console.log(document.cookie); // nope
      return res.json();
    })
    .then((json) => {
      return json;
    });
}
