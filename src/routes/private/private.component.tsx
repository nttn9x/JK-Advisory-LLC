import React from "react";
import { Route, Redirect } from "react-router-dom";

import { routeDatas } from "./private.route";

import { ROUTES } from "constants/navigation";

const PrivateRoute: React.SFC = () => (
  <>
    {routeDatas.map(({ component, ...rest }: any, i) => (
      <Route key={`key_r_p_${i}`} {...rest} component={component} />
    ))}
    <Route exact path="/">
      <Redirect to={ROUTES.Dashboard} />
    </Route>
  </>
);

export default PrivateRoute;
