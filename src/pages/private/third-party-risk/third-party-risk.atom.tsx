// @ts-ignore
import { atom } from "recoil";

export enum ChartStockPrice {
  CHART_STOCKPRICE_VALUE = "CHART_STOCKPRICE_VALUE",
  CHART_SENTIMENT_VALUE = "CHART_SENTIMENT_VALUE",
}

export const chartStockPrice = atom({
  key: ChartStockPrice.CHART_STOCKPRICE_VALUE, // unique ID (with respect to other atoms/selectors)
  default: {
    isLoading: true,
    isFirstLoad: true,
    data: {},
    times: [],
    time: null,
  }, // default value (aka initial value)
});

export const chartSentiment = atom({
  key: ChartStockPrice.CHART_SENTIMENT_VALUE, // unique ID (with respect to other atoms/selectors)
  default: {
    isLoading: true,
    isFirstLoad: true,
    data: {},
    times: [],
    time: null,
  }, // default value (aka initial value)
});
