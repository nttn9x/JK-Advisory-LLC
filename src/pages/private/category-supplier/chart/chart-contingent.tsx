import React, { useCallback, useEffect } from "react";
// @ts-ignore
import { useRecoilState } from "recoil";
import randomColor from "randomcolor";
import { Pie } from "react-chartjs-2";

import { apiDefaultAnalytic } from "services/analytics.service";

import { ProgressLoading, TypographyNowrap } from "components/ui-own";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { chartContingent } from "../category-supplier.atom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subtitle: {
      marginBottom: theme.spacing(0.5),
    },
  })
);

function poolColors(a: any) {
  const pool: any = [];
  for (let i = 0; i < a; i++) {
    let color;
    do {
      color = randomColor({
        luminosity: "random",
        format: "rgba",
        alpha: 0.8, // e.g. 'rgba(9, 1, 107, 0.5)',
      });
    } while (pool.includes(color));
    pool.push(color);
  }
  return pool;
}

const ChartContingent: React.FC<any> = ({ chart_type }) => {
  const [localComp, setLocalComp] = useRecoilState<any>(chartContingent);
  const styles = useStyles();

  const fetchMyAPI = useCallback(
    async (chart_type) => {
      setLocalComp((prevState: any) => ({
        ...prevState,
        isLoading: true,
      }));

      let data: any = {};
      try {
        data = await apiDefaultAnalytic(chart_type, 2);
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
        data: data.data,
        labels: data.label,
        colors: poolColors(data && data.label ? data.label.length : 0),
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
      fetchMyAPI(chart_type).then();
    }, 500);
  }, [chart_type, fetchMyAPI]);

  if (localComp.isLoading) {
    return <ProgressLoading />;
  }

  return (
    <>
      <div style={{ width: "80%", flex: 1, margin: "auto", marginBottom: 8 }}>
        <Pie
          data={{
            labels: localComp.labels,
            datasets: [
              {
                data: localComp.data,
                backgroundColor: localComp.colors,
              },
            ],
          }}
          options={{
            plugins: {
              colorschemes: {
                scheme: "brewer.Paired12",
              },
            },
            responsive: true,
            ...localComp.options,
          }}
        />
      </div>
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
      >
        {localComp.description}
      </TypographyNowrap>
    </>
  );
};

export default ChartContingent;
