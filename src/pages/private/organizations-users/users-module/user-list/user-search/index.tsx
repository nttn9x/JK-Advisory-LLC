import React from "react";

import { Grid, Typography } from "components/ui-libraries";
import InputSearch from "components/ui-own/input-search";

import { useTranslation } from "react-i18next";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../main/user-list.action";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filter: {
      padding: theme.spacing(1.5),
    },
    number: {
      paddingRight: theme.spacing(1.5),
    },
  })
);

const UserSearch: React.FC<any> = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { rowCount } = useSelector(
    (state: any) => state.organizations.userList
  );
  const dispatch = useDispatch();

  const handleSearch = (params: any) => {
    dispatch(loadData(params));
  };

  return (
    <Grid
      className={styles.filter}
      container
      spacing={3}
      justify={"space-between"}
      alignItems={"center"}
    >
      <Grid item xs={6}>
        <Grid container alignItems="flex-end">
          <Typography
            className={styles.number}
            variant="button"
            display="block"
            component="div"
            color="textPrimary"
          >
            {rowCount}
          </Typography>
          <Typography
            variant="body1"
            display="block"
            component="div"
            color="textSecondary"
          >
            {t("total")}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs>
        <InputSearch onSearch={handleSearch} />
      </Grid>
    </Grid>
  );
};

export default UserSearch;
