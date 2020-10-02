import React from "react";
import { Redirect, Route } from "react-router-dom";

import { getUser } from "utils/auth.util";

import { LayoutPage } from "components/ui-own";

import { ROUTES } from "constants/navigation";

const withAuth = (Component: any) => (props: any) => {
  const user = getUser();

  if (!user) {
    return <Redirect to={ROUTES.Login} />;
  }

  return (
    <LayoutPage>
      <Component {...props} />
    </LayoutPage>
  );
};

const AuthRoute = ({ component, ...props }: any) => {
  return <Route {...props} component={withAuth(component)} />;
};

export default AuthRoute;
