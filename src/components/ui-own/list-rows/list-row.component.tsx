import React from "react";

import {
  createStyles,
  makeStyles,
  Theme,
  fade,
} from "@material-ui/core/styles";

import classnames from "classnames";
import { isDarkThemeMode } from "utils/setting-themes";

export const useRowStyles = makeStyles((theme: Theme) => {
  const spacing = theme.spacing(1.5);
  return createStyles({
    rootBottom: {
      paddingBottom: theme.spacing(1.5),
    },
    rootPadding: {
      paddingLeft: spacing,
      paddingRight: spacing,
    },
    row: {
      position: "relative",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      height: "100%",
      boxSizing: "border-box",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: isDarkThemeMode()
        ? theme.palette.grey["600"]
        : fade(theme.palette.primary.light, 0.08),
      padding: theme.spacing(3),
    },
    rowSelected: {
      backgroundColor: theme.palette.primary.light,
    },
  });
});

const Row = ({
  style,
  selected,
  paddingLeftRight,
  paddingBottom,
  children,
  classes,
  ...props
}: any) => {
  const styles = useRowStyles();

  return (
    <div
      style={style}
      className={classnames({
        [styles.rootPadding]: Boolean(paddingLeftRight),
        [styles.rootBottom]: Boolean(paddingBottom),
      })}
    >
      <div
        className={classnames(styles.row, classes.row, {
          [styles.rowSelected]: selected,
        })}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

Row.defaultProps = { classes: {} };

export default Row;
