import { useCallback } from "react";
import { useSnackbar, SnackbarAction } from "notistack";

function useMessage() {
  const { enqueueSnackbar } = useSnackbar();

  const pushMsgDefault = useCallback(
    function pushMsgDefault(
      message: any,
      variant: "default" | "error" | "success" | "warning" | "info",
      action?: SnackbarAction,
      duration?: number
    ) {
      if (!message) {
        return;
      }

      let messages = Array.isArray(message) ? message : [message];

      messages.forEach((msg) => {
        try {
          let message = typeof msg === "string" ? msg : msg.message;

          enqueueSnackbar(message, {
            variant,
            autoHideDuration: duration || 5000,
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
            action: action,
          });
        } catch (error) {
          console.log(error);
        }
      });
    },
    [enqueueSnackbar]
  );

  return { pushMsgDefault };
}

export default useMessage;
