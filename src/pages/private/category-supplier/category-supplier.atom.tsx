// @ts-ignore
import { atom } from "recoil";

export enum ChartContingent {
  CHART_CONTINGENT_VALUE = "CHART_CONTINGENT_VALUE",
}

export const chartContingent = atom({
  key: ChartContingent.CHART_CONTINGENT_VALUE, // unique ID (with respect to other atoms/selectors)
  default: { isLoading: true, isFirstLoad: true, data: [] }, // default value (aka initial value)
});

export enum ChartUnemployment {
  CHART_UNEMPLOYMENT_VALUE = "CHART_UNEMPLOYMENT_VALUE",
}

export const chartUnemployment = atom({
  key: ChartUnemployment.CHART_UNEMPLOYMENT_VALUE, // unique ID (with respect to other atoms/selectors)
  default: {
    isLoading: true,
    isFirstLoad: true,
    data: {
      labels: [],
      datasets: [],
    },
  }, // default value (aka initial value)
});

export enum News {
  NEWS_VALUE = "NEWS_VALUE",
}

export const news = atom({
  key: News.NEWS_VALUE, // unique ID (with respect to other atoms/selectors)
  default: { isOpen: false, news: [], isLoading: false, isFirstLoad: true }, // default value (aka initial value)
});
