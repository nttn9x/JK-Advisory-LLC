import React, { useEffect } from "react";

import { Line } from "react-chartjs-2";

import { apiAnalytic } from "services/analytics.service";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "../../../components/ui-libraries/typography";
import { Grid } from "../../../components/ui-libraries/grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: { marginTop: theme.spacing(3) },
  })
);

const AnalyticOne: React.FC<any> = () => {
  const styles = useStyles();
  const [dataChart, setDataChart] = React.useState({
    header: "",
    backgroundLink: "",
    description: "",
    subtitle: "",
    data: {},
    options: {},
  });

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await apiAnalytic(1);
        setDataChart({
          backgroundLink: data.background_link,
          header: data.header,
          subtitle: data.subtitle,
          description: data.description,
          options: {
            title: {
              display: true,
              text: data["graph title"],
            },
          },
          data: {
            labels: data.x,
            datasets: [
              {
                label: data.y1_name,
                type: "line",
                data: data.y1,
                fill: false,
                borderColor: "#EC932F",
                backgroundColor: "#EC932F",
                pointBorderColor: "#EC932F",
                pointBackgroundColor: "#EC932F",
                pointHoverBackgroundColor: "#EC932F",
                pointHoverBorderColor: "#EC932F",
                yAxisID: "y-axis-1",
                lineTension: 0,
              },
              {
                type: "line",
                label: data.y2_name,
                data: data.y2,
                fill: false,
                backgroundColor: "#71B37C",
                borderColor: "#71B37C",
                hoverBackgroundColor: "#71B37C",
                hoverBorderColor: "#71B37C",
                yAxisID: "y-axis-1",
                lineTension: 0,
              },
            ],
          },
        });
      } catch (e) {
        console.log("Nguyen C: analytic.component.tsx, F: fetch, N: e ", e);
      }
    };

    fetch().then();
  }, []);

  return (
    <>
      <Grid
        className={styles.container}
        container
        spacing={6}
        alignItems={"center"}
        justify={"center"}
      >
        <Grid item xs={12}>
          <Typography variant={"h6"} gutterBottom>
            {dataChart.header}
          </Typography>
          <Typography variant={"subtitle2"} gutterBottom>
            {dataChart.subtitle}
          </Typography>
          <Typography variant={"body2"}>{dataChart.description}</Typography>
        </Grid>
        <Grid item xs={8}>
          {" "}
          <div style={{ position: "relative" }}>
            <div
              style={{
                backgroundImage: `url(${dataChart.backgroundLink})`,
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: -1,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <Line
              data={dataChart.data}
              options={{
                responsive: true,
                scales: {
                  yAxes: [
                    {
                      type: "linear",
                      display: true,
                      position: "left",
                      id: "y-axis-1",
                    },
                  ],
                },
                ...dataChart.options,
              }}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default AnalyticOne;
