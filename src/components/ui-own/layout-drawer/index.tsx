import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { Typography, Grid, IconButton } from "components/ui-libraries";
import { CloseIcon } from "components/ui-libraries/icons";
import { Breadcrumbs, PlaceHolderDetail } from "components/ui-own";
import Loading from "components/ui-own/progress/loading/loading.component";

import { useThemesContext } from "context/theme.context";

import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) => ({
  grid: {
    height: 33,
    display: "flex",
    alignItems: "center",
  },
  divider: {
    marginLeft: theme.spacing(3 / 2),
  },
  close: {
    position: "absolute",
    top: theme.spacing(0),
    right: theme.spacing(0),
  },
}));

interface IProps {
  title: string;
  isFirstLoad?: boolean;
  isLoading?: boolean;
  onClose: any;
  actionNode?: any;
}

const LayoutDrawer: React.FC<IProps> = ({
  isFirstLoad,
  isLoading,
  title,
  onClose,
  actionNode,
  children,
}) => {
  const { t } = useTranslation(["common"]);
  const { isMobile } = useThemesContext();
  const classes = useStyles();
  return (
    <>
      {!isMobile && (
        <IconButton className={classes.close} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      )}
      <Typography
        color="textPrimary"
        variant={isMobile ? "h6" : "h4"}
        gutterBottom
      >
        {t(title)}
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Breadcrumbs />
        </Grid>
        <Grid item>{actionNode}</Grid>
        <Grid item xs={12}>
          {isFirstLoad && <PlaceHolderDetail />}
          {!isFirstLoad && isLoading && <Loading />}
          {!isLoading && !isFirstLoad && children}
        </Grid>
      </Grid>
    </>
  );
};

export { LayoutDrawer };
