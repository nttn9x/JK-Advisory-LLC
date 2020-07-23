// @ts-ignore
import { atom } from "recoil";

export enum ChartStockPrice {
  CHART_UNEMPLOYMENT_VALUE = "CHART_STOCK_PRICE_VALUE",
}

export const chartStockPrice = atom({
  key: ChartStockPrice.CHART_UNEMPLOYMENT_VALUE, // unique ID (with respect to other atoms/selectors)
  default: {
    isLoading: true,
    isFirstLoad: true,
    data: {
      labels: [],
      datasets: [],
    },
  }, // default value (aka initial value)
});
