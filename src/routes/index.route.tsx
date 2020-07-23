import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { RecoilRoot } from "recoil";

import { ProgressLoader, LayoutApp } from "components/ui-own";

import ThemeProvider from "context/theme.context";
import NotificationProvider from "context/notification.context";
import NewDetailProvider from "components/ui-own/new_detail/new_detail.context";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import PrivateRoute from "./private/private.component";

const Root: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <NotificationProvider>
          <RecoilRoot>
            <NewDetailProvider>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <LayoutApp>
                  <Suspense fallback={<ProgressLoader />}>
                    <PrivateRoute  />
                  </Suspense>
                </LayoutApp>
              </MuiPickersUtilsProvider>
            </NewDetailProvider>
          </RecoilRoot>
        </NotificationProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
