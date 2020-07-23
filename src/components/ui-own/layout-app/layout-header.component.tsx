import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import style from "./layout.module.scss";

import { ROUTES } from "constants/navigation";

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "components/ui-libraries";
import { SubjectIcon, ArrowBackIcon } from "components/ui-libraries/icons";
import UserSettingsComponent from "../user-settings/user-settings.component";

import { useTranslation } from "react-i18next";

import classnames from "classnames";

const LayoutHeader = ({ pathname, isSettingPage, isOpen, onToggle }: any) => {
  const { t } = useTranslation(["common"]);
  const name = useMemo(() => {
    const arr = pathname.split("/");
    const value = arr[arr.length - 1].split("-").join("_");

    return value;
  }, [pathname]);

  return (
    <AppBar
      id="a-h-t"
      color="default"
      classes={{
        root: classnames(style.header, {
          [style["header--close"]]: !isOpen,
          [style["header--setting"]]: isSettingPage,
        }),
      }}
    >
      <Toolbar
        variant="dense"
        disableGutters={true}
        classes={{ root: style.toolbar }}
      >
        {!isSettingPage ? (
          <IconButton id="ico-app-menu" onClick={onToggle}>
            <SubjectIcon />
          </IconButton>
        ) : (
          <Link to={ROUTES.Dashboard}>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </Link>
        )}
        <Typography
          className={style.header__title}
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
