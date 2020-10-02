import React from "react";
import { withRouter } from "react-router";
import CssBaseline from "@material-ui/core/CssBaseline";

import LayoutHeaderComponent from "./layout-header.component";
import MenuComponent from "./layout-sidebar/layout-sidebar.component";

import useLayoutHook from "./layout.hook";

const Layout: React.FC = ({ history, children }: any) => {
  const { show, user } = useLayoutHook(history);

  return (
    <>
      <CssBaseline />
      {user && <MenuComponent />}

      {user && <LayoutHeaderComponent pathname={history.location.pathname} />}

      {show && children}
    </>
  );
};

export default withRouter(Layout);
