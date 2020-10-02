import produce from "immer";

export const ENQUEUE_SNACKBAR = "[SNACKBAR] ENQUEUE_SNACKBAR";
export const CLOSE_SNACKBAR = "[SNACKBAR] CLOSE_SNACKBAR";

const initialState: any[] = [];

export interface EnqueueAction {
  type: typeof ENQUEUE_SNACKBAR;
  snackbars: any[];
}

export interface CloseAction {
  type: typeof CLOSE_SNACKBAR;
  key: string;
}

type Actions = EnqueueAction | CloseAction;

const reducer = produce((draft, action: Actions) => {
  switch (action.type) {
    case ENQUEUE_SNACKBAR:
      return [...draft, ...action.snackbars];
    case CLOSE_SNACKBAR:
      return draft.filter(
        (notification: any) => notification.key !== action.key
      );
  }
}, initialState);

export { initialState, reducer as default };
