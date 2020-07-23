import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import styles from "./actions-detail.module.scss";

import {
  Popover,
  Button,
  MenuList,
  MenuItem,
  IconButton,
  Divider,
  Typography
} from "components/ui-libraries";

import { SettingsIcon } from "../../ui-libraries/icons";

import { BlockUI } from "constants/common";

import { useTranslation } from "react-i18next";

interface IActionDetailProps {
  isUpdate?: boolean;
  labelTitle: string;
  labelSave?: string;
  labelUpdate?: string;
  isHideSettings: boolean;
  useFormik?: boolean;
  doSave?: any;
  doDelete?: any;
  blockUI: BlockUI;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.light
  }
}));

const ActionsDetail: React.FC<IActionDetailProps> = ({
  isUpdate,
  isHideSettings,
  useFormik,
  doSave,
  doDelete,
  blockUI,
  labelTitle,
  labelSave,
  labelUpdate
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const { t } = useTranslation(["common"]);

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleDelete() {
    doDelete();

    handleClose();
  }

  const open = Boolean(anchorEl);

  if (blockUI.isBlocking) {
    return (
      <div
        className={`${styles.actions} ${classes.root} ${styles["actions--blocking"]}`}
      >
        <Typography color="textPrimary" variant="button" align="center">
          {t(blockUI.message || "saving")}
        </Typography>
      </div>
    );
  }

  return (
    <div className={styles.actions}>
      <Typography
        className={styles.label}
        variant="h6"
        gutterBottom
        color="textSecondary"
      >
        {t(labelTitle)}
      </Typography>
      {isUpdate && !isHideSettings && (
        <>
          <IconButton aria-label="settings" onClick={handleClick}>
            <SettingsIcon />
          </IconButton>
          <Divider
            className={styles.divider}
            variant="middle"
            orientation="vertical"
          />
        </>
      )}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <MenuList>
          <MenuItem onClick={handleDelete}>{t("delete")}</MenuItem>
        </MenuList>
      </Popover>

      {useFormik ? (
        <Button
          color="primary"
          variant="contained"
          aria-label="save or update"
          type="submit"
        >
          {t(isUpdate ? "save" : "update")}
        </Button>
      ) : (
        <Button
          color="primary"
          variant="contained"
          aria-label="save or update"
          onClick={doSave}
        >
          {t(!isUpdate ? labelSave || "save" : labelUpdate || "update")}
        </Button>
      )}
    </div>
  );
};

export default ActionsDetail;
