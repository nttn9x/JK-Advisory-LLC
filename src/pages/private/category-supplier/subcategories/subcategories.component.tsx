import React, { useEffect, useCallback, useState } from "react";

import News from "components/ui-own/news";

import { apiGetProfile } from "services/supply_chain.service";

import { apiGetCategoryNews } from "services/category.service";

import { useProviderContext } from "components/ui-own/new_detail/new_detail.context";
import { useTranslation } from "react-i18next";

const SubCategory: React.FC<any> = ({ name, category_id }) => {
  const [localComp, setLocalComp] = useState({
    data: [],
    isLoading: false,
    isFirstLoad: true,
  });
  const { actionShowDialog } = useProviderContext();
  const { t } = useTranslation();

  const fetchMyAPI = useCallback(async () => {
    setLocalComp((prevState: any) => ({
      ...prevState,
      isLoading: true,
    }));

    let data: any = [];
    try {
      data = await apiGetCategoryNews({ category_id, type: "insights" });
    } catch (e) {
      console.log("Nguyen C: subcategories.component.tsx, F: e, N: error ", e);
    }

    let title = "";
    try {
      title = await apiGetProfile(name);
    } catch (e) {
      console.log("Nguyen C: subcategories.component.tsx, F: e, N: error ", e);
    }

    setLocalComp((prevState: any) => ({
      ...prevState,
      data,
      title,
      isLoading: false,
      isFirstLoad: false,
    }));
  }, [name, category_id]);

  useEffect(() => {
    fetchMyAPI().then();
  }, [fetchMyAPI]);

  return (
    <News onClick={actionShowDialog} {...localComp} title={t("insights")} />
  );
};

export default SubCategory;
