import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "components/ui-libraries";
import { Line } from "react-chartjs-2";

import { apiAnalytic } from "services/analytics.service";

import { useTranslation } from "react-i18next";
import { ReactComponent as ChartIcon } from "styles/icons/common/chart.svg";

const Analytic: React.FC<any> = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [dataChart, setDataChart] = React.useState({
    header: "",
    data: {},
    options: {},
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await apiAnalytic(1);
        setDataChart({
          header: data.header,
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
      <Button
        variant={"outlined"}
        startIcon={<ChartIcon width={30} height={30} />}
        onClick={handleClickOpen}
      >
        {t("view_chart")}
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          {dataChart.header}
        </DialogTitle>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Analytic;
