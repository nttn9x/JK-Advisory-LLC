import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ROUTES } from "constants/navigation";

import { setUser } from "store/modules/auth/auth.action";

import { List, ListItem, ListItemText, ListItemIcon } from "../../ui-libraries";

import { ExitToAppIcon } from "../../ui-libraries/icons";

import { removeData } from "utils/auth.util";

import { useTranslation } from "react-i18next";

const UserSettingsMain = () => {
  const { t } = useTranslation(["common"]);
  const dispatch = useDispatch();
  const history = useHistory();

  const doLogout = () => {
    removeData();

    dispatch(setUser());

    setTimeout(() => {
      history.push(ROUTES.Login);
    }, 0);
  };

  return (
    <List>
      <ListItem button onClick={doLogout}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText>{t("sign_out")}</ListItemText>
      </ListItem>
    </List>
  );
};

export default UserSettingsMain;
