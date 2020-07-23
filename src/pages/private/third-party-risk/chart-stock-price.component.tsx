import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Line } from "react-chartjs-2";

import { apiStockPrices } from "services/analytics.service";

import { ProgressLoading } from "components/ui-own";
import { chartStockPrice } from "./third-party-risk.atom";
import { useTranslation } from "react-i18next";

const ChartStockPrice: React.FC<any> = ({ name }) => {
  const { t } = useTranslation();
  const [localComp, setLocalComp] = useRecoilState<any>(chartStockPrice);

  const fetchMyAPI = useCallback(
    async (name) => {
      setLocalComp((prevState: any) => ({
        ...prevState,
        isLoading: true,
      }));

      let data: any = {};
      try {
        data = await apiStockPrices(name);
      } catch (e) {
        console.log(
          "Nguyen C: subcategories.component.tsx, F: e, N: error ",
          e
        );
      }
      setLocalComp((prevState: any) => ({
        ...prevState,
        subtitle: data.subtitle,
        description: data.description,
        data: data["data point"],
        labels: data.label,
        colors: "#ff6384",
        options: {
          title: {
            fontSize: 17,
            fontStyle: "bold",
            display: true,
            text: t("history_stock_price"),
          },
        },
        isLoading: false,
        isFirstLoad: false,
      }));
    },
    [t, setLocalComp]
  );

  useEffect(() => {
    if (!name || name.length < 1) return;
    setTimeout(() => {
      fetchMyAPI(name[0]).then();
    }, 500);
  }, [name, fetchMyAPI]);

  if (localComp.isLoading) {
    return <ProgressLoading />;
  }

  return (
    <>
      <div style={{ width: "100%", flex: 1, margin: "auto", marginBottom: 8 }}>
        <Line
          data={{
            labels: localComp.labels,
            datasets: [
              {
                data: localComp.data,
                lineTension: 0,
                backgroundColor: localComp.colors,
              },
            ],
          }}
          options={{
            legend: {
              labels: {
                fontSize: 0,
              },
            },
            responsive: true,
            ...localComp.options,
          }}
        />
      </div>
    </>
  );
};

export default ChartStockPrice;
