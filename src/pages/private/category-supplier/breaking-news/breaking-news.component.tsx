import React, { useCallback } from "react";
import {
  BreakingNews,
  useBreakingNewsHook,
} from "components/ui-own/breaking-news";

import { apiGetBreakingNews } from "services/breaking_news.service";

import { useTranslation } from "react-i18next";
import { useProviderContext } from "../../../../components/ui-own/new_detail/new_detail.context";

const BreakingNewsComp: React.FC<any> = ({ category_id }) => {
  const { t } = useTranslation();
  const api = useCallback(() => apiGetBreakingNews({ category_id, type: "breakingnews" }), [
    category_id,
  ]);
  const { localComp, ...rest } = useBreakingNewsHook(api);
  const { actionShowDialog } = useProviderContext();

  return (
    <BreakingNews
      onClick={actionShowDialog}
      {...localComp}
      {...rest}
      title={t("breaking_news")}
    />
  );
};

export default BreakingNewsComp;
