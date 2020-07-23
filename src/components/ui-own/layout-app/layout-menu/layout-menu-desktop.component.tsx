import React, { useEffect } from "react";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import styles from "../layout.module.scss";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Drawer,
} from "components/ui-libraries";

import { SIDE_BAR } from "constants/navigation";

import { useTranslation } from "react-i18next";

import classnames from "classnames";
import { ROUTES } from "constants/navigation";

import { lazyLoadBG } from "utils/image.util";

import imgBg from "styles/images/sidebar.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebar_item: {
      "& svg": { color: theme.palette.primary.light },
    },
  })
);

interface ILayoutMenuProps extends RouteComponentProps<any> {
  pathname: string;
  isOpen: boolean;
  doChangePage: any;
}

const LayoutMenu: React.FC<ILayoutMenuProps> = ({
  pathname,
  isOpen,
  doChangePage,
}) => {
  const { t } = useTranslation(["common"]);
  const classOwns = useStyles();

  useEffect(() => {
    lazyLoadBG("main-sidebar", imgBg);
  }, []);

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: `${styles.drawer}${isOpen ? "" : ` ${styles["drawer--close"]}`}`,
      }}
    >
      <Link to={ROUTES.Dashboard}>
        <div
          className={classnames(styles.logo, {
            [styles["logo--close"]]: !isOpen,
          })}
        >
          <div
            className={classnames(styles.logo_image, {
              [styles["logo_image--small"]]: !isOpen,
            })}
          ></div>
          {isOpen && (
            <div className={classnames(styles.logo_name)}>JK Advisory LLC</div>
          )}
        </div>
      </Link>
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
      <div id="main-sidebar" className={styles["sidebar--bg"]}></div>
    </Drawer>
  );
};

export default withRouter(LayoutMenu);
