import React, { useRef } from "react";

import { IconButton } from "../components/ui-libraries";
import { CloseIcon } from "../components/ui-libraries/icons";

import { SnackbarProvider } from "notistack";

const NotificationProvider = (props: any) => {
  const snackbarRef: any = useRef();

  const onClickDismiss = (key: any) => () => {
    snackbarRef.current.closeSnackbar(key);
  };

  return (
    <SnackbarProvider
      ref={snackbarRef}
      action={(key: any) => (
        <IconButton style={{ zIndex: 1 }} onClick={onClickDismiss(key)}>
          <CloseIcon style={{ color: "#FFFFFF" }} />
        </IconButton>
      )}
      {...props}
    />
  );
};

export default NotificationProvider;
