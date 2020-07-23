import React, { createContext, useContext, useReducer } from "react";

import { withRouter } from "react-router";

const OPEN_DIALOG = "OPEN_DIALOG";
const HIDE_DIALOG = "HIDE_DIALOG";

const initialState = {
  openDialog: false,
  body: {},
};

export const NewDetailContext = createContext<any>(initialState);

function reducer(state: any, action: any) {
  switch (action.type) {
    case OPEN_DIALOG:
      return { ...state, openDialog: true, ...action.payload };
    case HIDE_DIALOG:
      return { ...state, openDialog: false };
    default:
      throw new Error();
  }
}

const NewDetailProvider = ({ children, history, ...props }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actionShowDialog = (body: any) => {
    console.log("Nguyen C: new_detail.context.tsx, F: actionShowDialog, N: body ", body);
    dispatch({ type: OPEN_DIALOG, payload: { body } });
  };
  const actionHideDialog = () => {
    dispatch({ type: HIDE_DIALOG });
  };

  return (
    <NewDetailContext.Provider
      value={{
        state,
        actionShowDialog,
        actionHideDialog,
      }}
      {...props}
    >
      {children}
    </NewDetailContext.Provider>
  );
};

export const useProviderContext = () => useContext(NewDetailContext);

export default withRouter(NewDetailProvider);
