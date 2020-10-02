import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Grid, Typography } from "components/ui-libraries";

import { useTranslation } from "react-i18next";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      padding: theme.spacing(1.5),
    },
  })
);

const UserTitle: React.FC<any> = () => {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <div className={styles.title}>
      <Grid item xs={12}>
        <Typography variant={"h6"} color={"textSecondary"}>
          {t("users")}
        </Typography>
      </Grid>
    </div>
  );
};

export default UserTitle;
