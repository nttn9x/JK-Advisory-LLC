import { lazy } from "react";
import { RouteProps } from "react-router-dom";

import { ROUTES } from "constants/navigation";

const routeDatas: RouteProps[] = [
  {
    path: ROUTES.Dashboard,
    component: lazy(() => import("pages/private/dashboard")),
  },
  {
    path: ROUTES.CategoryInsights,
    component: lazy(() => import("pages/private/category-supplier")),
  },
  {
    path: ROUTES.SupplierManagement,
    component: lazy(() => import("pages/private/supplier-management")),
  },
  {
    path: ROUTES.ThirdRiskManagement,
    component: lazy(() => import("pages/private/third-party-risk")),
  },
  {
    path: ROUTES.Analytics,
    component: lazy(() => import("pages/private/analytics")),
  },
  {
    path: ROUTES.SettingSuppliers,
    component: lazy(() => import("pages/private/setting/suppliers")),
  },
];

export { routeDatas };
