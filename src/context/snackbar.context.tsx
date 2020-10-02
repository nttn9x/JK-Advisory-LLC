import React, { useRef, useEffect } from "react";
import { SnackbarProvider } from "notistack";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import { IconButton } from "components/ui-libraries";
import { CloseIcon } from "components/icons";

import { removeMessage } from "store/modules/snackbar/snackbar.action";


const NotificationProvider = (props: any) => {
  const { t } = useTranslation("common");
  const snackbars = useSelector((state: any) => state.common.snackbars);
  const dispatch = useDispatch();
  const snackbarRef: any = useRef();
  let displayed: any = [];

  function storeDisplayed(id: string) {
    displayed = [...displayed, id];
  }

  function removeDisplayed(id: string) {
    displayed = displayed.filter((key: string) => id !== key);
  }

  useEffect(() => {
    snackbars.forEach((notification: any) => {
      // Do nothing if snackbar is already displayed
      if (displayed.includes(notification.key)) return;

      snackbarRef.current.enqueueSnackbar(t(notification.message), {
        key: notification.key,
        preventDuplicate: true,
        variant: notification.variant,
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        onExited: (event: any, key: string) => {
          dispatch(removeMessage(key));
          removeDisplayed(key);
        },
      });

      // Keep track of snackbars that we've displayed
      storeDisplayed(notification.key);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t, snackbars]);

  function onClickDismiss(key: any) {
    snackbarRef.current.closeSnackbar(key);
    removeDisplayed(key);
    dispatch(removeMessage(key));
  }

  return (
    <SnackbarProvider
      ref={snackbarRef}
      action={(key: any) => (
        <IconButton
          onClick={() => {
            onClickDismiss(key);
          }}
        >
          <CloseIcon style={{ color: "#FFFFFF" }} />
        </IconButton>
      )}
      {...props}
    />
  );
};

export default NotificationProvider;
