import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

import { apiGetKeySupplierNews } from "services/supplier.service";
import { news } from "../category-supplier.atom";

const useDialogHook = () => {
  const [localComp, setLocalComp] = useRecoilState<any>(news);
  const actionHideDialog = () => {
    setLocalComp((preState: any) => ({ ...preState, isOpen: false }));
  };

  const fetchMyAPI = useCallback(async () => {
    setLocalComp((prevState: any) => ({
      ...prevState,
      isLoading: true,
    }));

    let data: any = {};
    try {
      data = await apiGetKeySupplierNews({
        supplier_name: localComp.supplier_name,
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
  }, [localComp.supplier_name, setLocalComp]);

  useEffect(() => {
    if (!localComp.isOpen) {
      return;
    }
    fetchMyAPI().then();
  }, [localComp.isOpen, fetchMyAPI]);

  return { localComp, actionHideDialog };
};

export default useDialogHook;
