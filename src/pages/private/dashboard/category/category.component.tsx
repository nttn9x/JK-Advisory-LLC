import React, { useCallback } from "react";

import { News, useNewHook } from "components/ui-own/news-list";

import { apiGetCategoryNews } from "services/category.service";

import { useTranslation } from "react-i18next";

const Category: React.FC<any> = () => {
  const { t } = useTranslation();
  const api: any = useCallback(
    () => apiGetCategoryNews({ category_id: 0, type: "insights" }),
    []
  );
  const { localComp, actionShowDialog } = useNewHook(api);

  return (
    <News
      {...localComp}
      title={t("category_name_news")}
      onClick={actionShowDialog}
    />
  );
};

export default Category;
