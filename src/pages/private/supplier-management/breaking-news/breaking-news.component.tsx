import React, { useEffect, useCallback, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import News from "components/ui-own/news";

import { apiGetBreakingNews } from "services/breaking_news.service";

import { useTranslation } from "react-i18next";
import { useProviderContext } from "../../../../components/ui-own/new_detail/new_detail.context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.grey["100"],
    },
    title: {
      margin: theme.spacing(1.5),
      paddingLeft: theme.spacing(1.5),
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    row: {
      paddingLeft: theme.spacing(1.5),
    },
    rowBody: {
      border: "unset",
      backgroundColor: "unset",
    },
  })
);

const BreakingNews: React.FC<any> = ({ name }) => {
  const { t } = useTranslation();
  const styles = useStyles();
  const [localComp, setLocalComp] = useState({
    data: [],
    isLoading: false,
    isFirstLoad: true,
  });
  const { actionShowDialog } = useProviderContext();

  const fetchMyAPI = useCallback(async (supplier_name) => {
    setLocalComp((prevState: any) => ({
      ...prevState,
      isLoading: true,
    }));

    let data: any = [];
    try {
      data = await apiGetBreakingNews({
        supplier: supplier_name,
        type: "breakingnews",
      });
    } catch (e) {
      console.log("Nguyen C: subcategories.component.tsx, F: e, N: error ", e);
    }

    setLocalComp((prevState: any) => ({
      ...prevState,
      data,
      isLoading: false,
      isFirstLoad: false,
    }));
  }, []);

  useEffect(() => {
    if (!name) {
      return;
    }
    fetchMyAPI(name).then();
  }, [name, fetchMyAPI]);

  return (
    <News
      {...localComp}
      onClick={actionShowDialog}
      title={t("breaking_news")}
      classes={{
        container: styles.container,
        title: styles.title,
        row: styles.row,
        rowBody: styles.rowBody,
      }}
    />
  );
};

export default BreakingNews;
