import React, { useCallback } from "react";

import { News, useNewHook } from "components/ui-own/news-list";

import { apiGetKeySupplierNews } from "services/supplier.service";

import { useTranslation } from "react-i18next";

const Supplier: React.FC<any> = () => {
  const { t } = useTranslation();
  const api: any = useCallback(() => apiGetKeySupplierNews(), []);
  const { localComp, actionShowDialog } = useNewHook(api);

  return (
    <News
      {...localComp}
      title={t("key_supplier_news")}
      onClick={actionShowDialog}
    />
  );
};

export default Supplier;
