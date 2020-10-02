import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import { dataList } from "atom/suppliers.atom";
import { thirdPartyRisk } from "atom";
import { useRecoilState } from "recoil";

import { ContainerDiv, NewDetail } from "components/ui-own";
import { AppBar, Grid, Tab, Tabs, Typography } from "components/ui-libraries";

import { apiGetAllSuppliers } from "services/supplier.service";
import ChartStockPrice from "./chart-stock-price.component";
import ChartSentiment from "./chart-sentiment.component";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(3),
    },
    filter: {},
    chart: {
      flex: "0 0 250px",
    },
    data: {
      flex: 1,
    },
    news: {
      height: "100%",
    },
    supName: {
      marginRight: theme.spacing(1.5),
      marginBottom: theme.spacing(1.5),
    },
    avatar: {
      textTransform: "uppercase",
    },
    tabs: {
      height: 34,
      minHeight: 34,
      marginBottom: theme.spacing(3),
    },
    tab: {
      height: 34,
      minHeight: 34,
    },
  })
);

const ThirdPartyRisk: React.FC<any> = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [state, setSupNames] = useRecoilState<any>(thirdPartyRisk);
  const [data, setData] = useRecoilState(dataList);

  useEffect(() => {
    if (data.length > 0) {
      return;
    }

    const fetchApi = async () => {
      try {
        const arr = await apiGetAllSuppliers();

        const sups = arr.filter((e: any) => !!e.active);

        setData(sups);

        if (sups && sups.length > 0) {
          setSupNames(() => ({
            supNames: [sups[0].name],
            tabIndex: 0,
          }));
        }
      } catch (e) {
        console.log("Nguyen C: index.tsx, F: fetchApi, N: e ", e);
      }
    };
    fetchApi();
  }, [data, setData, setSupNames]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    const supplier: any = data[newValue];

    setSupNames(() => ({
      supNames: [supplier.name],
      tabIndex: newValue,
    }));
  };

  return (
    <>
      <NewDetail />
      <ContainerDiv className={styles.container}>
        <div className={styles.filter}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant={"subtitle2"}>
                {t("supplier_management")}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <AppBar
                color={"default"}
                position={"relative"}
                classes={{ root: styles.tabs }}
              >
                <Tabs
                  scrollButtons="auto"
                  indicatorColor={"primary"}
                  variant="scrollable"
                  classes={{ root: styles.tabs }}
                  textColor="primary"
                  value={state.tabIndex}
                  onChange={handleChange}
                >
                  {data &&
                    data.map(
                      (e: any, i: number) =>
                        !!e.active && (
                          <Tab
                            key={i}
                            classes={{ root: styles.tab }}
                            label={e.name}
                          />
                        )
                    )}
                </Tabs>
              </AppBar>
            </Grid>
          </Grid>
        </div>
        <div className={styles.chart}>
          <Grid className={styles.news} container spacing={3}>
            <Grid item xs={6}>
              <ChartStockPrice name={state.supNames} />
            </Grid>
            <Grid item xs={6}>
              <ChartSentiment name={state.supNames} />
            </Grid>
          </Grid>
        </div>
        {/*<div className={styles.data}>*/}
        {/*  <Grid className={styles.news} container spacing={3}>*/}
        {/*    <Grid item xs={10}></Grid>*/}
        {/*    <Grid item xs={4} className={styles.news}>*/}
        {/*      <BreakingNews name={state.supNames} />*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={8} className={styles.news}>*/}
        {/*      <News name={state.supNames} />*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}
        {/*</div>*/}
      </ContainerDiv>
    </>
  );
};

export default ThirdPartyRisk;
