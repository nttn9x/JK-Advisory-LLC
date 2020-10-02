import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Grid, Tooltip, IconButton } from "components/ui-libraries";
import { TypographyNowrap, ListRow } from "components/ui-own";

import { MoreVertIcon } from "components/ui-libraries/icons";

import { showEditPopup } from "../organizaiton-item.action";

import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

export const useStyles = makeStyles((theme: Theme) => {
  const spacing = theme.spacing(1.5 / 2);
  return createStyles({
    body: {
      position: "relative",
    },
    button: {
      position: "absolute",
      right: spacing,
      top: spacing,
    },
    icon: {
      color: theme.palette.grey["400"],
      "&:hover": { color: theme.palette.grey["600"] },
    },
    iconSelected: {
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
    disable: {
      textDecoration: "line-through",
      fontStyle: "italic",
    },
    title: {
      color: theme.palette.text.primary,
    },
    titleSelected: {
      color: theme.palette.getContrastText(theme.palette.primary.main),
    },
  });
});

const OrganizationItem: React.FC<any> = ({
  index,
  style,
  data,
  actions,
}: any) => {
  const { rowCount, selectedOrganization } = useSelector(
    (state: any) => state.organizations.organizationList
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const styles = useStyles();
  const selected = index === selectedOrganization.index;

  function showPopup(e: any) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(showEditPopup(data, index));
  }

  return (
    <ListRow
      selected={selected}
      style={style}
      paddingLeftRight
      paddingBottom={index !== rowCount - 1}
      onClick={() => {
        actions.onRowClick(index, data);
      }}
    >
      <Tooltip title={t("settings")}>
        <IconButton
          onClick={showPopup}
          size={"small"}
          className={styles.button}
        >
          <MoreVertIcon
            className={classNames(styles.icon, {
              [styles.iconSelected]: selected,
            })}
          />
        </IconButton>
      </Tooltip>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TypographyNowrap
            className={classNames(styles.title, {
              [styles.titleSelected]: selected,
              [styles.disable]: !data.active,
            })}
            variant={"subtitle2"}
            title={data.name}
          >
            {data.name}
          </TypographyNowrap>
        </Grid>
      </Grid>
    </ListRow>
  );
};

export default OrganizationItem;
