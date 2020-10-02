import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { RecoilRoot } from "recoil";

import { ProgressLoader } from "components/ui-own";

import store from "store";

import ThemeProvider from "context/theme.context";
import SnackbarProvider from "context/snackbar.context";
import NewDetailProvider from "components/ui-own/new_detail/new_detail.context";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import AuthRoute from "./auth-router";
import { ROUTES } from "../constants/navigation";
import Login from "pages/public/login";

// Private
const Dashboard = lazy(() => import("pages/private/dashboard"));
const CategoryInsights = lazy(() => import("pages/private/category-supplier"));
const SupplierManagement = lazy(() =>
  import("pages/private/supplier-management")
);
const ThirdRiskManagement = lazy(() =>
  import("pages/private/third-party-risk")
);
const Analytics = lazy(() => import("pages/private/analytics"));
const SettingSuppliers = lazy(() => import("pages/private/setting/suppliers"));
const Organizations = lazy(() => import("pages/private/organizations-users/container"));

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider>
          <SnackbarProvider>
            <RecoilRoot>
              <NewDetailProvider>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Suspense fallback={<ProgressLoader />}>
                    <AuthRoute
                      exact
                      path={ROUTES.Dashboard}
                      component={Dashboard}
                    />
                    <AuthRoute
                      exact
                      path={ROUTES.CategoryInsights}
                      component={CategoryInsights}
                    />
                    <AuthRoute
                      exact
                      path={ROUTES.SupplierManagement}
                      component={SupplierManagement}
                    />
                    <AuthRoute
                      exact
                      path={ROUTES.ThirdRiskManagement}
                      component={ThirdRiskManagement}
                    />
                    <AuthRoute
                      exact
                      path={ROUTES.Analytics}
                      component={Analytics}
                    />
                    <AuthRoute
                      exact
                      path={ROUTES.SettingSuppliers}
                      component={SettingSuppliers}
                    />
                    <AuthRoute
                      exact
                      path={ROUTES.User}
                      component={Organizations}
                    />
                    <Route exact path={ROUTES.Login} component={Login} />
                    <Route
                      exact
                      path={"/"}
                      render={() => {
                        return <Redirect to={ROUTES.Dashboard} />;
                      }}
                    />
                  </Suspense>
                </MuiPickersUtilsProvider>
              </NewDetailProvider>
            </RecoilRoot>
          </SnackbarProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default Root;
