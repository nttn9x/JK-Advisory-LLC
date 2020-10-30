import { getItem, removeItem, setItem } from "./localstorage";
import _get from "lodash/get";

const USER_DATA = "JKA_USER_DATA";

export const setData = (data: any) => {
  setItem(USER_DATA, data);
};

export const removeData = () => {
  removeItem(USER_DATA);
};

export const getUser = () => {
  try {
    const auth: any = getItem(USER_DATA);
    console.log("Nguyen C: auth.util.tsx, F: getUser, N: auth ", auth);
    if (auth && auth.access_token) {
      const user = JSON.parse(atob(auth.access_token.split(".")[1]));

      return user;
      //
      // const exp: Date = new Date(user.exp * 1000);
      //
      // if (exp.getTime() > Date.now()) {
      //   return user;
      // }
    }
  } catch (e) {
    console.log("Nguyen C: localstorage.tsx, F: getUserData, N: e ", e);
    removeItem(USER_DATA);
  }

  return null;
};

export const getToken = () => {
  const authData = getItem(USER_DATA);

  return _get(authData, "access_token", null);
};
