import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { ContainerDiv, NewDetail } from "components/ui-own";
import {
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "components/ui-libraries";

import BreakingNews from "./breaking-news";
import News from "./key-suppliers-news";
import Profile from "./profiles";

import { SUPPLIER_MANAGEMENT } from "constants/common";
import { useTranslation } from "react-i18next";

import { supplierManagement } from "atom";
// @ts-ignore
import { useRecoilState } from "recoil";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "100%",
    },
    news: {
      height: "95%",
    },
  })
);

const Dashboard: React.FC<any> = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  const [supName, setSupName] = useRecoilState(supplierManagement);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSupName(event.target.value as string);
  };

  return (
    <>
      <NewDetail />
      <ContainerDiv className={styles.container}>
        <Grid className={styles.container} container spacing={3}>
          <Grid item lg={2} md={4}>
            <FormControl fullWidth={true}>
              <InputLabel id="demo-simple-select-label">
                {t("supplier_management")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={supName}
                onChange={handleChange}
              >
                {SUPPLIER_MANAGEMENT.map((e: any, i: number) => (
                  <MenuItem key={i} value={e.key}>
                    {t(e.name)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={10}>
            <Profile name={supName} />
          </Grid>
          <Grid item xs={8} className={styles.news}>
            <News name={supName} />
          </Grid>
          <Grid item xs={4} className={styles.news}>
            <BreakingNews name={supName} />
          </Grid>
        </Grid>
      </ContainerDiv>
    </>
  );
};

export default Dashboard;
