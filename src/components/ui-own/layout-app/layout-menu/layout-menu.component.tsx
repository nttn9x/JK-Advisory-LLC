import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";

import MenuDesktop from "./layout-menu-desktop.component";

interface ILayoutMenuProps extends RouteComponentProps<any> {
  isMobile: boolean;
  isOpen: boolean;
  menuEl: any;
  history: any;
  handleCloseMenu: any;
}

const LayoutMenu: React.FC<ILayoutMenuProps> = ({
  isMobile,
  isOpen,
  menuEl,
  history,
  handleCloseMenu,
}) => {
  const pathname = history.location.pathname;

  function doChangePage(url: string) {
    handleCloseMenu();

    try {
      history.push(url);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <MenuDesktop
      isOpen={isOpen}
      pathname={pathname}
      doChangePage={doChangePage}
    />
  );
};

export default withRouter(LayoutMenu);
