import React, { useCallback } from "react";
import {
  BreakingNews,
  useBreakingNewsHook,
} from "components/ui-own/breaking-news";

import { apiGetMarketAnalysis } from "services/category.service";

import { useTranslation } from "react-i18next";
import { Typography } from "components/ui-libraries/typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: { fontWeight: 500, marginBottom: theme.spacing(1.5) },
  })
);

const MarketAnalysis: React.FC<any> = ({ category_id }) => {
  const styles = useStyles();
  const { t } = useTranslation();
  const api = useCallback(() => apiGetMarketAnalysis(category_id), [
    category_id,
  ]);
  const { localComp, ...rest } = useBreakingNewsHook(api);

  const renderRow = useCallback(
    (data: any) => {
      return (
        <>
          <Typography className={styles.title} variant={"subtitle1"}>
            {t("key_insights")}
          </Typography>
          {data["Key Insights"] &&
            data["Key Insights"].split("\n").map((i: any, key: any) => {
              return (
                <Typography
                  component={"p"}
                  style={{ marginBottom: 16 }}
                  key={key}
                >
                  {i}
                </Typography>
              );
            })}
          <Typography className={styles.title} variant={"subtitle1"}>
            {t("market_verview")}
          </Typography>
          {data["Market Overview"] &&
            data["Market Overview"].split("\n").map((i: any, key: any) => {
              return (
                <Typography
                  component={"p"}
                  style={{ marginBottom: 16 }}
                  key={key}
                >
                  {i}
                </Typography>
              );
            })}
        </>
      );
    },
    [t, styles.title]
  );

  return (
    <BreakingNews
      {...localComp}
      {...rest}
      title={t("market_analysis")}
      renderRow={renderRow}
    />
  );
};

export default MarketAnalysis;
