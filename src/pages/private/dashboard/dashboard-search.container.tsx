import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

import BreakingNews from "./breaking-news";
import Insights from "./insights";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    news: {
      flex: 1,
      display: "flex",
    },
    body: {
      display: "flex",
      flexDirection: "row",
      height: "100%",
    },
    insights: {
      flex: 2,
      marginRight: theme.spacing(1.5),
    },
    tab: {
      marginBottom: theme.spacing(1.5),
    },
  })
);

const DashboardSearch: React.FC<any> = ({ querySearch }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.insights}>
          <Insights querySearch={querySearch} />
        </div>
        <div className={styles.news}>
          <BreakingNews querySearch={querySearch} />
        </div>
      </div>
    </div>
  );
};

export default DashboardSearch;
