import axios from "axios";

import { API_ROOT, HTTP_CODE } from "constants/common";

import { getToken } from "utils/auth.util";
import { removeData } from "utils/auth.util";

function formatResponse(response: any): any {
  return response.data;
}

export function formatError(error: any) {
  if (error.response) {
    const status = error.response.status;

    const messages = [];
    if (
      status === HTTP_CODE.Unauthorized ||
      status === HTTP_CODE.WrongSecretKey
    ) {
      removeData();
      window.location.href = "/login";
      messages.push("Unauthorized");
    } else {
      if (error.response.data && error.response.data.errors) {
        const errors = error.response.data.errors;
        errors.forEach((err: any) => {
          messages.push(err.message);
        });
      } else if (error.response.data && error.response.data.Message) {
        messages.push(error.response.data.Message);
      } else {
        messages.push(error.response.statusText);
      }
    }

    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return {
      isError: true,
      messages,
      status,
    };
  }
  // Something happened in setting up the request that triggered an Error
  return { isError: true, messages: [error.message] };
}

function handleBeforeCallApi() {
  // Add a request interceptor
  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent

      config.headers.Authorization = `Bearer ${getToken()}`;

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
}

function handleAfterCallApi() {
  // Add a response interceptor
  axios.interceptors.response.use(
    function (response: any): any {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return formatResponse(response);
    },
    function (error: any) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(formatError(error));
    }
  );
}

function setUpApi() {
  axios.defaults.baseURL = API_ROOT;
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

  handleBeforeCallApi();

  handleAfterCallApi();
}

export { setUpApi };
