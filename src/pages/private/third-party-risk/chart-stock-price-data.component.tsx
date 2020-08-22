import React, { useEffect, useRef } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { createChart } from "lightweight-charts";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chart: {
      flex: 1,
    },
  })
);

const ChartStockPriceData: React.FC<any> = ({ time, data }) => {
  const classes = useStyles();
  const refChart = useRef(null);

  useEffect(() => {
    const ele: any = refChart.current;
    ele.innerHTML = "";

    const chart = createChart(ele, {
      width: ele.offsetWidth,
      height: 240,
    });

    const areaSeries = chart.addAreaSeries({
      topColor: "rgba(255, 82, 82, 0.56)",
      bottomColor: "rgba(255, 82, 82, 0.04)",
      lineColor: "rgba(255, 82, 82, 1)",
      lineWidth: 2,
    });

    const length = (data[time] || []).length;
    const data_chart = [];
    if (length > 0) {
      for (let i = 0; i < length; i++) {
        const datum = data[time][i];
        if (datum) {
          data_chart.push({ time: datum.Time, value: datum.Value });
        }
      }
    }
    chart.timeScale().resetTimeScale();
    chart.timeScale().fitContent();
    areaSeries.setData(data_chart);
  }, [time, data]);

  return <div className={classes.chart} ref={refChart}></div>;
};

export default ChartStockPriceData;
