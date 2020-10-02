import { lazy } from "react";

import store from "store";

export const Organizations = lazy(() =>
  import("pages/private/organizations-users").then((module: any) => {
    store.injectReducer("organizations", module.reducer);
    store.injectSaga("organizations", module.saga);

    return import("pages/private/organizations-users");
  })
);


