import {
  ENQUEUE_SNACKBAR,
  CLOSE_SNACKBAR,
  EnqueueAction,
} from "./snackbar.reducer";

export const pushSuccessMessage = (message: string): EnqueueAction => {
  return enqueueSnackbar(message, "success");
};

export const pushErrorMessage = (error: any): EnqueueAction => {
  return enqueueSnackbar(error.messages || error.message, "error");
};

export const pushWarningMessage = (message: string): EnqueueAction => {
  return enqueueSnackbar(message, "warning");
};

export const enqueueSnackbar = (
  message: string,
  variant: string
): EnqueueAction => {
  if (Array.isArray(message)) {
    const snackbars: any = [];
    message.forEach((msg) => {
      snackbars.push({
        key: new Date().getTime() + Math.random(),
        message: msg,
        variant,
      });
    });

    return {
      type: ENQUEUE_SNACKBAR,
      snackbars,
    };
  } else {
    return {
      type: ENQUEUE_SNACKBAR,
      snackbars: [
        {
          key: new Date().getTime() + Math.random(),
          message,
          variant,
        },
      ],
    };
  }
};

export const removeMessage = (key: string) => ({
  type: CLOSE_SNACKBAR,
  key,
});
