import {useCallback, useState} from "react";

import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useSnackbar} from "notistack";

import {SNACKBAR_TYPE} from "constants/common";
import {ROUTES} from "constants/navigation";

import {setUser} from "store/modules/auth/auth.action";

import {login} from "services/auth.service";

import {getUser, setData} from "utils/auth.util";

const useLoginHook = ({ history }: any) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation(["login", "common"]);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = useCallback(
    async (values: any, actions) => {
      try {
        const data = await login(values);

        // Store in localstorage
        setData(data);

        const user = getUser();

        // Update auth saga
        dispatch(setUser(user));


        setTimeout(() => {
          history.push(ROUTES.Dashboard);
        }, 0);
      } catch (e) {
        enqueueSnackbar(t("common:login_failed"), {
          variant: SNACKBAR_TYPE.Error,
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          autoHideDuration: 3000,
        });
        setLoading(false);
      }
    },
    [t, history, dispatch, enqueueSnackbar]
  );

  return { loading, onSubmit };
};

export default useLoginHook;
