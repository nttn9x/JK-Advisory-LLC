import { useEffect, useCallback, useState } from "react";

import { useProviderContext } from "components/ui-own/new_detail/new_detail.context";

const useHook = (apiGetBreakingNews: any, category_name?: string) => {
  const [localComp, setLocalComp] = useState({
    data: [],
    isLoading: false,
    isFirstLoad: true,
  });
  const { actionShowDialog } = useProviderContext();

  const fetchMyAPI = useCallback(async () => {
    setLocalComp((prevState: any) => ({
      ...prevState,
      isLoading: true,
    }));

    let data: any = [];
    try {
      data = await apiGetBreakingNews(category_name);
    } catch (e) {
      console.log("Nguyen C: subcategories.component.tsx, F: e, N: error ", e);
    }

    setLocalComp((prevState: any) => ({
      ...prevState,
      data,
      isLoading: false,
      isFirstLoad: false,
    }));
  }, [apiGetBreakingNews, category_name]);

  useEffect(() => {
    fetchMyAPI().then();
  }, [fetchMyAPI]);

  return { localComp, actionShowDialog };
};

export default useHook;
