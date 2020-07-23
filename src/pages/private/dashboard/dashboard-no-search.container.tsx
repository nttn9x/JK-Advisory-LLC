import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Grid } from "components/ui-libraries";

import Supplier from "./supplier";
import Category from "./category";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      height: "100%",
    },
    news: {
      flex: 1,
    },
    category: { height: "100%", paddingRight: theme.spacing(1.5) },
    supplier: { height: "100%", paddingLeft: theme.spacing(1.5) },
  })
);

const DashboardNoSearch: React.FC<any> = () => {
  const styles = useStyles();

  return (
    <div className={styles.news}>
      <Grid container className={styles.grid}>
        <Grid item xs={6} className={styles.category}>
          <Category />
        </Grid>
        <Grid item xs={6} className={styles.supplier}>
          <Supplier />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardNoSearch;
