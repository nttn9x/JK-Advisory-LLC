import { useState } from "react";

import { useAuthDataContext } from "context/auth.context";
import useMessage from "hook/message.hook";

import { User } from "constants/model";
import { HTTP_CODE } from "constants/common";
import { ROUTES } from "constants/navigation";

// import { signIn } from "services/auth.service";

export function useOwnRedux(history: any) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { isAuth, onLogin } = useAuthDataContext();
  const { pushMsgDefault } = useMessage();

  function handleError(response: any) {
    if (response.status === HTTP_CODE.Unauthorized) {
      throw Error("Login failed!");
    }

    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response.json();
  }

  async function handleLogin(user: User) {
    const locationState = history.location.state;

    setLoading(true);

    // await signIn(user)
    //   .then(handleError)
    //   .then(function (data: any) {
    //     onLogin(data);
    //
    //     try {
    //       history.push(locationState.from);
    //     } catch (error) {
    //       history.push(ROUTES.Dashboard);
    //     }
    //   })
    //   .catch(function (error) {
    //     pushMsgDefault(error.message, "error");
    //     setLoading(false);
    //   });
  }

  return { isLoading, isAuth, handleLogin };
}
