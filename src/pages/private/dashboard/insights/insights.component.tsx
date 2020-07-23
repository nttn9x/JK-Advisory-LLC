import React, { useEffect, useCallback, useState } from "react";

import News from "components/ui-own/news";

import { apiGetInsights } from "services/insight.service";

import { useProviderContext } from "components/ui-own/new_detail/new_detail.context";
import { useTranslation } from "react-i18next";

const Insights: React.FC<any> = ({ querySearch }) => {
  const [localComp, setLocalComp] = useState({
    data: [],
    isLoading: false,
    isFirstLoad: true,
  });
  const { t } = useTranslation();
  const { actionShowDialog } = useProviderContext();

  const fetchMyAPI = useCallback(async () => {
    setLocalComp((prevState: any) => ({
      ...prevState,
      isLoading: true,
    }));

    let data: any = [];
    try {
      data = await apiGetInsights({ search_term: querySearch });
    } catch (e) {
      console.log("Nguyen C: subcategories.component.tsx, F: e, N: error ", e);
    }

    setLocalComp((prevState: any) => ({
      ...prevState,
      data,
      isLoading: false,
      isFirstLoad: false,
    }));
  }, [querySearch]);

  useEffect(() => {
    fetchMyAPI().then();
  }, [fetchMyAPI]);

  return (
    <News onClick={actionShowDialog} {...localComp} title={t("insights")} />
  );
};

export default Insights;
