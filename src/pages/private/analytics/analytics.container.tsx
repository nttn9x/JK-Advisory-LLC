import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Paper, Tab, TabPanel, Tabs } from "components/ui-libraries";
import { ContainerDiv } from "components/ui-own";

import AnalyticOne from "./analytic-one.component";
import AnalyticTwo from "./analytic-two.component";
import AnalyticThree from "./analytic-three.component";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "50vh",
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(3)
    },
    tab: {
      flex: 1,
      position: "relative",
    },
  })
);

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Analytic: React.FC<any> = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ContainerDiv className={styles.container}>
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label={t("transportation_index")} {...a11yProps(0)} />
          <Tab label={t("should_cost_model")} {...a11yProps(1)} />
          <Tab label={t("us_labor_cost")} {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <TabPanel className={styles.tab} value={value} index={0} label="Item One">
        <AnalyticOne />
      </TabPanel>
      <TabPanel className={styles.tab} value={value} index={1} label="Item Two">
        <AnalyticTwo />
      </TabPanel>
      <TabPanel
        className={styles.tab}
        value={value}
        index={2}
        label="Item Three"
      >
        <AnalyticThree />
      </TabPanel>
    </ContainerDiv>
  );
};

export default Analytic;
