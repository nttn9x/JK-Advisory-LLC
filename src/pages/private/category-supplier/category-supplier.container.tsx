import React, {useEffect, useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

import BreakingNews from "./breaking-news";
import KeySuppliersNews from "./key-suppliers-news";
import KeySuppliersNewsFirstTab from "./key-suppliers-news-first-tab";
import MarketAnalysis from "./market-analysis";
import Subcategories from "./subcategories";
import Chart from "./chart";
import {NewDetail} from "components/ui-own";
import News from "./news";
import {AppBar, Grid, Tab, Tabs} from "components/ui-libraries";

import {apiGetAllCategories} from "services/categories.service";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    bodyRow: {
      display: "flex",
      height: "100%",
      flexDirection: "row",
    },
    bodyColumn: {
      display: "flex",
      height: "100%",
      flexDirection: "column",
    },
    grid: {
      height: "100%",
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
    bodyTop: {
      flex: "0 0 300px",
      flexDirection: "row",
      marginBottom: theme.spacing(1.5),
    },
    bodyBottom: {
      flex: 1.5,
      display: "flex",
    },
    subcategories: {
      flex: 2,
      marginRight: theme.spacing(1),
    },
    insights: {
      flex: 1,
      marginRight: theme.spacing(1),
    },
    breakingNews: {
      flex: 1,
      marginLeft: theme.spacing(1),
    },
    news: {
      flex: 1,
      marginLeft: theme.spacing(1),
    },
    newsOne: {
      height: "50%",
      marginBottom: theme.spacing(1),
    },
    newsTwo: {
      height: "50%",
      marginTop: theme.spacing(1),
    },
    subcategoriesColumn: {
      flex: 1,
    },
  })
);

const CategoryContainer: React.FC<any> = () => {
  const styles = useStyles();
  const [state, setState] = useState<any>({
    datas: [],
    tabIndex: 0,
    category_id: 0,
    category_name: null,
  });

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const datas = await apiGetAllCategories();

        const data = datas[0];

        setState((prevState: any) => ({
          ...prevState,
          datas,
          tabIndex: 0,
          category_id: data.id,
          category_name: data.name,
        }));
      } catch (e) {
        console.log(
          "Nguyen C: category-supplier.container.tsx, F: fetchApi, N: e ",
          e
        );
      }
    };
    fetchApi();
  }, []);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    const data = state.datas[newValue];
    let category_id = data.id;

    setState((prevState: any) => ({
      ...prevState,
      tabIndex: newValue,
      category_id,
      category_name: data.name,
    }));
  };

  return (
    <>
      <News />
      <NewDetail />
      <div className={styles.container}>
        <AppBar
          color={"default"}
          position={"relative"}
          classes={{ root: styles.tabs }}
        >
          <Tabs
            indicatorColor={"primary"}
            classes={{ root: styles.tabs }}
            value={state.tabIndex}
            onChange={handleChange}
          >
            {state.datas.map((e: any, i: number) => (
              <Tab classes={{ root: styles.tab }} label={e.tab_name} />
            ))}
          </Tabs>
        </AppBar>
        {state.category_name === "temp-labor" ||
        state.category_name === "facilities" ||
        state.category_name === "telecom" ? (
          <div className={styles.bodyColumn}>
            <div className={styles.bodyTop}>
              <Grid className={styles.grid} container spacing={1}>
                <Grid item xs={5}>
                  <Chart category_name={state.category_name} />
                </Grid>
                <Grid item xs={3}>
                  <MarketAnalysis category_name={state.category_name} />
                </Grid>
                <Grid item xs={4}>
                  <KeySuppliersNewsFirstTab
                    category_name={state.category_name}
                  />
                </Grid>
              </Grid>
            </div>
            <div className={styles.bodyBottom}>
              <div className={styles.insights}>
                <Subcategories category_id={state.category_id} />
              </div>
              <div className={styles.breakingNews}>
                <BreakingNews category_id={state.category_id} />
              </div>
            </div>
            {/*<div className={styles.bodyTop}>*/}
            {/*  <Grid className={styles.grid} container spacing={1}>*/}
            {/*    <Grid item xs={5}>*/}
            {/*      <Chart />*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={3}>*/}
            {/*      <MarketAnalysis category_id={state.category_id} />*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={4}>*/}
            {/*      <KeySuppliersNews />*/}
            {/*    </Grid>*/}
            {/*  </Grid>*/}
            {/*</div>*/}
          </div>
        ) : (
          <div className={styles.bodyRow}>
            <div className={styles.subcategoriesColumn}>
              <Subcategories category_id={state.category_id} />
            </div>
            <div className={styles.news}>
              <div className={styles.newsOne}>
                <BreakingNews category_id={state.category_id} />
              </div>
              <div className={styles.newsTwo}>
                <KeySuppliersNews category_id={state.category_id} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryContainer;
