import { JWT_THE_KEY_OF_THE_LIFE } from "constants/common";

import { TIMEOUT } from "constants/common";

export function setToken(token: string) {
  localStorage.setItem(JWT_THE_KEY_OF_THE_LIFE, JSON.stringify(token));
}

export function removeToken() {
  localStorage.removeItem(JWT_THE_KEY_OF_THE_LIFE);
}

export function getToken() {
  const token: any = localStorage.getItem(JWT_THE_KEY_OF_THE_LIFE) || null;
  if (token) {
    try {
      return JSON.parse(token);
    } catch (error) {
      removeToken();
    }
  }
  return null;
}

export function isTokenExpired(token: string): boolean {
  try {
    if (token) {
      const user = JSON.parse(atob(token.split(".")[1]));
      const exp: Date = new Date(user.exp * 1000);

      return exp.getTime() < Date.now();
    }
  } catch (error) {
    console.log(error);
  }

  return true;
}

export function getUser(): any {
  let user = null;
  try {
    const token = getToken();
    if (token) {
      const isExpired = isTokenExpired(token);
      if (!isExpired) {
        user = JSON.parse(atob(token.split(".")[1]));

        user.firstString = user.unique_name.charAt(0);
      }
    }
  } catch (error) {
    console.log(error);
  }

  return user;
}

export function isCallRefreshToken() {
  let isExpired = false;
  let isRefresh = false;
  let token = null;

  try {
    token = getToken();

    if (token) {
      const user = JSON.parse(atob(token.split(".")[1]));
      const now = new Date(Date.now() + TIMEOUT.RefreshToken * 60000);
      const exp = new Date(user.exp * 1000);

      if (exp.getTime() < Date.now()) {
        isExpired = true;
      } else {
        if (now.getTime() > exp.getTime()) {
          isRefresh = true;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }

  return { isExpired, isRefresh, token };
}
