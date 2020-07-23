import React from "react";
import styles from "./user-settings.module.scss";

import { AccountBoxIcon } from "../../ui-libraries/icons";
import Typography from "../../ui-own/typography-nowrap";

interface IProps {
  authData: any;
}

const UserSettingsInfo: React.FC<IProps> = ({ authData }) => {
  
  return (
    <div className={styles.userinfo}>
      <div className={styles.userinfo_image}>
        <AccountBoxIcon color="primary" />
      </div>
      <div className={styles.userinfo_detail}>
        <Typography title={authData.unique_name} color="textPrimary">
          {authData.unique_name}
        </Typography>
        <Typography title={authData.email} color="textSecondary">
          {authData.email}
        </Typography>
      </div>
    </div>
  );
};

export default UserSettingsInfo;
