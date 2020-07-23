import React, { useMemo } from "react";
import style from "./layout.module.scss";
import { withRouter } from "react-router";
import CssBaseline from "@material-ui/core/CssBaseline";

import { ROUTES } from "constants/navigation";
import LayoutHeaderComponent from "./layout-header.component";
import MenuComponent from "./layout-menu/layout-menu.component";
import { ContainerDiv } from "components/ui-own/wrapper";

import useLayoutHook from "./layout.hook";
import { useThemesContext } from "context/theme.context";

import classnames from "classnames";

const Layout: React.FC = ({ history, children }: any) => {
  const { isMobile } = useThemesContext();
  const { isShow, menuEl, isOpen, onToggle, handleCloseMenu } = useLayoutHook(
    isMobile,
    history
  );
  const isSettingPage = useMemo(() => {
    const pathname = history.location.pathname;

    return pathname.startsWith(ROUTES.Setting);
  }, [history.location.pathname]);

  return (
    <>
      <CssBaseline />
      {!isSettingPage && (
        <MenuComponent
          menuEl={menuEl}
          isOpen={isOpen}
          isMobile={isMobile}
          handleCloseMenu={handleCloseMenu}
        />
      )}

      <LayoutHeaderComponent
        isOpen={isOpen}
        isSettingPage={isSettingPage}
        pathname={history.location.pathname}
        onToggle={onToggle}
      />

      <ContainerDiv
        padding
        className={classnames("scrollbar", style["body--has-login"], {
          [style["body--close"]]: !isOpen,
          [style["body--setting"]]: isSettingPage,
        })}
      >
        <div className={style.wrapper}>{isShow && children}</div>
      </ContainerDiv>
    </>
  );
};

export default withRouter(Layout);
