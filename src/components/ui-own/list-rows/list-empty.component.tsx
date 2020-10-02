import React from "react";

import { Skeleton } from "components/ui-libraries";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      padding: theme.spacing(1.5),
    },
    skeleton: {
      marginBottom: theme.spacing(1.5),
    },
  })
);

const Empty = React.memo(function Empty({ rowHeight, ...props }: any) {
  const styles = useStyles();
  return (
    <div className={styles.list} style={props}>
      <Skeleton
        className={styles.skeleton}
        variant="rect"
        height={rowHeight}
        width={"100%"}
      />
      <Skeleton variant="rect" height={rowHeight} width={"100%"} />
    </div>
  );
});

export default Empty;
