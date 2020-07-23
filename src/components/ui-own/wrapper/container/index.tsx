import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { Paper } from "components/ui-libraries";
import { PlaceHolderDetail } from "components/ui-own";
import LoadingComponent from "components/ui-own/progress/loading/loading.component";

import classnames from "classnames";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  gutterBottom: {
    marginBottom: theme.spacing(3),
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const ContainerDiv: React.FC<any> = ({
  className,
  padding,
  gutterBottom,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div
      className={classnames({
        [className]: className && className.length > 0,
        [classes.root]: Boolean(padding),
        [classes.gutterBottom]: Boolean(gutterBottom),
      })}
      {...props}
    />
  );
};

export const ContainerPaper: React.FC<any> = ({
  isFirstLoad,
  isLoading,
  className,
  padding,
  gutterBottom,
  children,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Paper
      classes={{
        root: classnames({
          [className]: className && className.length > 0,
          [classes.root]: Boolean(padding),
          [classes.gutterBottom]: Boolean(gutterBottom),
        }),
      }}
      {...props}
    >
      {isLoading && <PlaceHolderDetail />}
      {isFirstLoad && (
        <div className={classes.loading}>
          <LoadingComponent />
        </div>
      )}
      {!isLoading && !isFirstLoad && children}
    </Paper>
  );
};
