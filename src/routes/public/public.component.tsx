import React from "react";
import { Route } from "react-router-dom";

import { routeDatas } from "./public.route";

const PublicRoute: React.FC = () => (
  <>
    {routeDatas.map(({ component, ...rest }: any, i) => (
      <Route key={`key_r_pl_${i}`} {...rest} component={component} />
    ))}
  </>
);

export default PublicRoute;
