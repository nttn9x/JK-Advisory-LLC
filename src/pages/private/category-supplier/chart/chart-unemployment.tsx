import React, { useCallback, useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";
import randomColor from "randomcolor";
import clone from "clone";
import { apiDefaultAnalytic } from "services/analytics.service";

import { Line } from "react-chartjs-2";
import { ProgressLoading, TypographyNowrap } from "components/ui-own";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { chartUnemployment } from "../category-supplier.atom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subtitle: {
      marginTop: theme.spacing(1.5),
    },
  })
);

const ChartUnemployment: React.FC<any> = ({ category_name }) => {
  const [localComp, setLocalComp] = useRecoilState<any>(chartUnemployment);
  const styles = useStyles();

  const fetchMyAPI = useCallback(
    async (category_name) => {
      setLocalComp((prevState: any) => ({
        ...prevState,
        isLoading: true,
      }));

      let data: any = {};
      try {
        data = await apiDefaultAnalytic(category_name, 4);
      } catch (e) {
        console.log(
          "Nguyen C: subcategories.component.tsx, F: e, N: error ",
          e
        );
      }
      let datasets: any = [];

      if (data.y_data) {
        data.y_data.forEach((e: any) => {
          const color = randomColor({
            luminosity: "random",
            format: "rgba",
            alpha: 0.8, // e.g. 'rgba(9, 1, 107, 0.5)',
          });

          datasets.push({
            data: e.data,
            label: e.name,
            fill: false,
            lineTension: 0.1,
            backgroundColor: color,
            borderColor: color,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: color,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: color,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
          });
        });
      }

      setLocalComp((prevState: any) => ({
        ...prevState,
        data: {
          labels: data.x_data,
          datasets,
        },
        subtitle: data.subtitle,
        description: data.description,
        options: {
          title: {
            display: true,
            text: data["graph title"],
          },
        },
        isLoading: false,
        isFirstLoad: false,
      }));
    },
    [setLocalComp]
  );

  useEffect(() => {
    setTimeout(() => {
      fetchMyAPI(category_name).then();
    }, 500);
  }, [category_name, fetchMyAPI]);

  const data = useMemo(() => {
    return clone(localComp.data);
  }, [localComp.data]);

  if (localComp.isLoading) {
    return <ProgressLoading />;
  }

  return (
    <>
      <Line
        data={data}
        options={{
          responsive: true,
          ...localComp.options,
        }}
      />
      <TypographyNowrap
        className={styles.subtitle}
        variant={"subtitle2"}
        title={localComp.subtitle}
      ></TypographyNowrap>
      <TypographyNowrap
        className={styles.subtitle}
        variant={"body1"}
        title={localComp.description}
        gutterBottom
      ></TypographyNowrap>
    </>
  );
};

export default ChartUnemployment;
