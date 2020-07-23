import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import News from "components/ui-own/news";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      borderRadius: theme.shape.borderRadius,
      backgroundColor:
        theme.palette.type === "dark"
          ? theme.palette.background.paper
          : theme.palette.grey["100"],
    },
    title: {
      margin: theme.spacing(1.5),
      paddingLeft: theme.spacing(1.5),
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    row: {
      paddingLeft: theme.spacing(1.5),
    },
    rowBody: {
      border: "unset",
      backgroundColor: "unset",
    },
  })
);

const BreakingNews: React.FC<any> = (props) => {
  const styles = useStyles();
  return (
    <News
      {...props}
      classes={{
        container: styles.container,
        title: styles.title,
        row: styles.row,
        rowBody: styles.rowBody,
      }}
    />
  );
};

export default BreakingNews;
