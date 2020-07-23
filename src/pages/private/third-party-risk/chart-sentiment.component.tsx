import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Line } from "react-chartjs-2";

import { apiSentiment } from "services/analytics.service";

import { ProgressLoading } from "components/ui-own";
import { chartSentiment } from "./third-party-risk.atom";
import { useTranslation } from "react-i18next";

const ChartSentiment: React.FC<any> = ({ name }) => {
  const { t } = useTranslation();
  const [localComp, setLocalComp] = useRecoilState<any>(chartSentiment);

  const fetchMyAPI = useCallback(
    async (name) => {
      setLocalComp((prevState: any) => ({
        ...prevState,
        isLoading: true,
      }));

      let data: any = {};
      try {
        data = await apiSentiment(name);
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
        borderColor: "#ff6384",
        options: {
          title: {
            fontSize: 17,
            fontStyle: "bold",
            display: true,
            text: t("sentiment_analysis"),
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
                fill: false,
                borderColor: "blue",
                lineTension: 0,
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0, // disables bezier curves
              },
            },
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

export default ChartSentiment;
