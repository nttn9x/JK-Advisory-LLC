import React from "react";

import { ProgressLoading } from "components/ui-own";
import { Button, ButtonGroup, Typography } from "components/ui-libraries";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import ChartStockPriceData from "./chart-stock-price-data.component";

import useChartStockPriceHook from "./chart-stock-price.hook";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      marginBottom: theme.spacing(3),
    },
    chart: {
      flex: 1,
    },
    time: {
      fontSize: "0.75em",
    },
  })
);

const ChartStockPrice: React.FC<any> = ({ name }) => {
  const classes = useStyles();
  const {
    t,
    time,
    data,
    times,
    loading,
    handleTimeChange,
  } = useChartStockPriceHook(name);

  if (loading) return <ProgressLoading />;

  return (
    <div className={classes.container}>
      <Typography variant={"h6"} align={"center"} gutterBottom>
        {t("historical_stock_price")}
      </Typography>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        {times.map((e: any, i: number) => (
          <Button
            onClick={() => {
              handleTimeChange(e);
            }}
            color={e === time ? "secondary" : "default"}
            className={classes.time}
            key={i}
          >
            {e}
          </Button>
        ))}
      </ButtonGroup>
      <ChartStockPriceData time={time} data={data} />
    </div>
  );
};

export default ChartStockPrice;
