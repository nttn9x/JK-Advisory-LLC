import React, { useCallback } from "react";
import {
  BreakingNews,
  useBreakingNewsHook,
} from "components/ui-own/breaking-news";

import { apiGetKeySupplierNews } from "services/supplier.service";

import { useTranslation } from "react-i18next";
import { useProviderContext } from "../../../../components/ui-own/new_detail/new_detail.context";

const KeySupplierNews: React.FC<any> = ({ category_id }) => {
  const { t } = useTranslation();
  const api = useCallback(() => apiGetKeySupplierNews({ category_id }), [
    category_id,
  ]);
  const { localComp, ...rest } = useBreakingNewsHook(api);
  const { actionShowDialog } = useProviderContext();
  return (
    <BreakingNews
      onClick={actionShowDialog}
      {...localComp}
      {...rest}
      title={t("key_supplier_news")}
    />
  );
};

export default KeySupplierNews;
