import React, { useState } from "react";
import { withRouter } from "react-router";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Divider, IconButton, Popover, Tooltip } from "components/ui-libraries";

import { PersonIcon, SettingsIcon } from "components/ui-libraries/icons";

import SettingsThemDarkTheme from "./user-settings-theme-dark-theme.component";
import SettingsThemPallete from "./user-settings-theme-pallete.component";
import SettingsTheme from "./user-settings-theme.component";
import SettingsMain from "./user-settings-main.component";
import { SETTINGS } from "./user-settings.constant";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/navigation";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300,
    },
  })
);

const UserSettings: React.FC<any> = () => {
  const classOwns = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [tabTypeSub, setTabTypeSub] = useState<number>(-1);
  const { t } = useTranslation(["common"]);

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
    setTabTypeSub(SETTINGS.EMPTY);
  }

  function goToSubSetting(type: number) {
    setTabTypeSub(type);
  }

  function doBack() {
    goToSubSetting(SETTINGS.EMPTY);
  }

  function getSubSetting(type: number) {
    switch (type) {
      case SETTINGS.DARK_THEME:
        return <SettingsThemDarkTheme doBack={doBack} />;
      case SETTINGS.THEMES:
        return <SettingsThemPallete doBack={doBack} />;
      default:
        return null;
    }
  }

  return (
    <>
      <Tooltip title={t("settings")}>
        <Link to={ROUTES.SettingSuppliers}>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title={t("themes")}>
        <IconButton
          edge="end"
          aria-label="Settings"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <PersonIcon />
        </IconButton>
      </Tooltip>
      <Popover
        transitionDuration={200}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        classes={{ paper: classOwns.root }}
      >
        {tabTypeSub === SETTINGS.EMPTY && (
          <>
            {/*<SettingsInfo />*/}
            <SettingsTheme goToSubSetting={goToSubSetting} />
            <Divider />
            <SettingsMain />
          </>
        )}
        {tabTypeSub !== SETTINGS.EMPTY && getSubSetting(tabTypeSub)}
      </Popover>
    </>
  );
};

export default withRouter(UserSettings);
