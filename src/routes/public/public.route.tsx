import { lazy } from "react";
import { RouteProps } from "react-router-dom";

import { ROUTES } from "constants/navigation";

const routeDatas: RouteProps[] = [
  {
    path: ROUTES.Login,
    component: lazy(() => import("pages/public/login")),
  },
];

export { routeDatas };
