import React from "react";

import { List, ListItem, ListItemText, ListItemIcon } from "../../ui-libraries";

import { ExitToAppIcon } from "../../ui-libraries/icons";

import { useTranslation } from "react-i18next";

interface IUserSettingsMainProps {
  doLogout: any;
  doChangePassword: any;
}

const UserSettingsMain: React.FC<IUserSettingsMainProps> = ({
  doLogout,
  doChangePassword
}) => {
  const { t } = useTranslation(["common"]);

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
