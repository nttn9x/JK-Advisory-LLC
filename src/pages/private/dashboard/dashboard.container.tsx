import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Grid } from "components/ui-libraries";
import { ContainerDiv, NewDetail } from "components/ui-own";
import Analytic from "./analytic";
import Filter from "./filter";
import DashboardNoSearch from "./dashboard-no-search.container";
import DashboardSearch from "./dashboard-search.container";

import { textSearch } from "atom/dashboard";
// @ts-ignore
import { useRecoilState } from "recoil";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(3),
    },
    grid: {
      height: "100%",
    },
    actions: { marginBottom: theme.spacing(1.5) },
  })
);

const Dashboard: React.FC<any> = () => {
  const styles = useStyles();
  const [value, setTextSearch] = useRecoilState(textSearch);

  return (
    <>
      <NewDetail />
      <ContainerDiv className={styles.container}>
        <div className={styles.actions}>
          <Grid container justify={"space-between"}>
            <Grid item xs={4}>
              <Filter setTextSearch={setTextSearch} />
            </Grid>
            <Grid item>
              <Analytic />
            </Grid>
          </Grid>
        </div>
        {!value ? (
          <DashboardNoSearch />
        ) : (
          <DashboardSearch querySearch={value} />
        )}
      </ContainerDiv>
    </>
  );
};

export default Dashboard;
