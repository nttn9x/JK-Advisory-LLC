import React from "react";

import { DashboardIcon } from "../components/ui-libraries/icons";

export enum ROUTES {
  Dashboard = "/dashboard",
  CategoryInsights = "/category-insights",
  SupplierManagement = "/supplier_management",
  ThirdRiskManagement = "/third-party-risk",
  Analytics = "/analytics",
  Setting = "/setting",
  SettingSuppliers = "/setting/suppliers",
  Login = "/login",
}

export const SIDE_BAR = [
  {
    keyi18n: "dashboard",
    linkTo: ROUTES.Dashboard,
    icon: <DashboardIcon />,
  },
  {
    keyi18n: "category_insights",
    linkTo: ROUTES.CategoryInsights,
    icon: <DashboardIcon />,
  },
  {
    keyi18n: "supplier_management",
    linkTo: ROUTES.SupplierManagement,
    icon: <DashboardIcon />,
  },
  {
    keyi18n: "third_party_risk",
    linkTo: ROUTES.ThirdRiskManagement,
    icon: <DashboardIcon />,
  },
  {
    keyi18n: "analytics",
    linkTo: ROUTES.Analytics,
    icon: <DashboardIcon />,
  },
];
