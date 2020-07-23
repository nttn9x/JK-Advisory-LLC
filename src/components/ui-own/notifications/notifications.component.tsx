import React, { useState } from "react";
import styles from "./notifications.module.scss";

import {
  Button,
  Popover,
  Divider,
  Tooltip,
  Typography,
  IconButton,
  Badge,
} from "../../ui-libraries";

import { NotificationsIcon, MoreVertIcon } from "../../ui-libraries/icons";

import { useTranslation } from "react-i18next";

const Notifications: React.FC<any> = () => {
  const { t } = useTranslation(["common"]);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Tooltip title={t("notifications")}>
        <IconButton onClick={handleClick} aria-label="Notifications">
          <Badge color="secondary" badgeContent={1}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Popover
        classes={{ paper: styles.main }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className={styles.header}>
          <Typography
            className={styles.title}
            variant="subtitle1"
            color="textSecondary"
          >
            {t("notifications")}
          </Typography>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
          >
            <MoreVertIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={styles.body}>
          <Typography variant="body1" gutterBottom>
            You have a message from ...
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            1 min ago
          </Typography>
        </div>
        <Divider />
        <Button color="primary" fullWidth className={styles.button}>
          {t("see_all")}
        </Button>
      </Popover>
    </>
  );
};

export default Notifications;
