import React from "react";
import { AutoSizer } from "react-virtualized";

import { useBreakingNewsHook } from "components/ui-own/breaking-news";

import { useTranslation } from "react-i18next";
import { callApi } from "utils/service.util";
import { API_ROOT } from "constants/common";

import { Typography } from "components/ui-libraries";
import New from "./new.component";
import classnames from "classnames";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ProgressLoading } from "components/ui-own";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      margin: "0 12px",
      paddingBottom: theme.spacing(1.5),
    },
  })
);

export async function apiGetKeySupplierNews(type: string) {
  const res: any = await callApi({
    url: `${API_ROOT}/news/?category_id=${type}&type=supplier`,
  });

  return res;
}

const KeySupplierNews: React.FC<any> = ({ category_id }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const { localComp } = useBreakingNewsHook(apiGetKeySupplierNews, category_id);

  if (localComp.isLoading) {
    return <ProgressLoading />;
  }

  return (
    <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
      <Typography variant="h6" className={classnames(styles.title)}>
        {t("Suppliers")}
      </Typography>
      <div style={{ flex: 1 }}>
        <AutoSizer>
          {({ height, width }: any) => {
            return (
              <div
                style={{ width: width - 16, height, overflowX: "unset" }}
                className="scrollbar"
              >
                {localComp.data &&
                  localComp.data.map((data: any, i: number) => (
                    <New data={data} key={i} />
                  ))}
              </div>
            );
          }}
        </AutoSizer>
      </div>
    </div>
  );
};

export default KeySupplierNews;
