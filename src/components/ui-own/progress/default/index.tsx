import React from "react";

import styles from "./loading.module.scss";

import { CircularProgress, Typography } from "components/ui-libraries";

const DefaultProgress: React.FC<any> = React.memo(({ message, ...props }) => {
  return (
    <div className={styles.container}>
      <CircularProgress {...props} />
      <Typography className={styles.message} color={"textSecondary"} align={"center"}>
        {message}
      </Typography>
    </div>
  );
});

export default DefaultProgress;
