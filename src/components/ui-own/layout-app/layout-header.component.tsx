import React, { useMemo } from "react";
import style from "./layout-header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { showSidebar, hideSidebar } from "store/modules/layout/layout.action";
import { layoutSelector } from "store/modules/layout/layout.selector";

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "components/ui-libraries";
import { SubjectIcon } from "components/ui-libraries/icons";

import UserSettingsComponent from "../user-settings/user-settings.component";

const LayoutHeader = ({ pathname }: any) => {
  const { t } = useTranslation(["common"]);
  const dispatch = useDispatch();
  const layoutState = useSelector(layoutSelector);

  const toggleSidebar = () => {

    if (layoutState.close) {
      dispatch(showSidebar());
    } else {
      dispatch(hideSidebar());
    }
  };

  const name = useMemo(() => {
    const arr = pathname.split("/");
    const value = arr[arr.length - 1].split("-").join("_");

    return value;
  }, [pathname]);

  return (
    <AppBar
      classes={{
        root: classnames(style.header, {
          [style["header--close"]]: layoutState.close,
        }),
      }}
    >
      <Toolbar variant="dense" classes={{ root: style.toolbar }}>
        <IconButton onClick={toggleSidebar} id="ico-app-menu">
          <SubjectIcon />
        </IconButton>
        <Typography
          className={style.title}
          variant="h6"
          color="textPrimary"
        >
          {t(name)}
        </Typography>
        <UserSettingsComponent classes={{ avatar: style.header__settings }} />
      </Toolbar>
    </AppBar>
  );
};

export default LayoutHeader;
