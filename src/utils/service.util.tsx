import axios, { AxiosRequestConfig } from "axios";

export function callApi(options: AxiosRequestConfig) {
  return axios(options);
}
