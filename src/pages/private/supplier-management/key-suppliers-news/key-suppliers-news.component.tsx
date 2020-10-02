import React, { useEffect, useCallback, useState } from "react";

import News from "components/ui-own/news";

import { apiGetKeySupplierNews } from "services/supplier.service";

import { useTranslation } from "react-i18next";
import { useProviderContext } from "../../../../components/ui-own/new_detail/new_detail.context";

const KeySuppliersNews: React.FC<any> = ({ name }) => {
  const { t } = useTranslation();
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
      data = await apiGetKeySupplierNews({
        supplier: supplier_name,
        type: "insights",
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
    <News {...localComp} onClick={actionShowDialog} title={t("insights")} />
  );
};

export default KeySuppliersNews;
