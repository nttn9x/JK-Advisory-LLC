import React from "react";
import { withRouter } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { layoutSelector } from "store/modules/layout/layout.selector";

import styles from "./layout-sidebar.module.scss";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "components/ui-libraries";

import { SIDE_BAR } from "constants/navigation";
import Logo from "./layout-sidebar-logo.component";
import classnames from "classnames";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebar_item: {
      "& svg": { color: theme.palette.primary.light },
    },
  })
);

const LayoutMenu: React.FC<any> = ({ history }) => {
  const { t } = useTranslation(["common"]);
  const classOwns = useStyles();
  const layoutState = useSelector(layoutSelector);
  const pathname = history.location.pathname;

  const doChangePage = (link: string) => {
    history.push(link);
  };

  return (
    <Drawer
      classes={{
        paper: classnames(styles.drawer, {
          [styles["drawer--close"]]: layoutState.close,
        }),
      }}
      variant="permanent"
    >
      <Logo close={layoutState.close}/>
      <List
        classes={{ root: styles.sidebar }}
        component="nav"
        aria-label="Nav links"
      >
        {SIDE_BAR.map((e: any, i: number) => {
          if (e.isHide) {
            return null;
          }
          let selected = pathname.includes(e.linkTo);
          return (
            <ListItem
              selected={selected}
              key={i}
              button
              onClick={() => doChangePage(e.linkTo)}
              classes={{
                root: selected ? classOwns.sidebar_item : "",
                selected: styles["sidebar_item--selected"],
              }}
            >
              <ListItemIcon
                classes={{
                  root: styles.sidebar_icon,
                }}
              >
                {e.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    color={selected ? "primary" : "inherit"}
                  >
                    {t(e.keyi18n)}
                  </Typography>
                }
                classes={{ root: styles.sidebar_text }}
              />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default withRouter(LayoutMenu);
