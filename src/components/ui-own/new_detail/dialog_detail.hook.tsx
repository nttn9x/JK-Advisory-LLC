import { useEffect, useCallback, useState } from "react";

import { apiGetArticle } from "services/article.service";

const useDialogHook = (openDialog: boolean, id: any) => {
  const [localComp, setLocalComp] = useState<any>({
    data: {
      alltext: "",
      summarize_text: "",
      image_url: "",
      source: "",
    },
    isLoading: false,
    isFirstLoad: true,
  });

  const fetchMyAPI = useCallback(async () => {
    setLocalComp((prevState: any) => ({
      ...prevState,
      isLoading: true,
    }));

    let data: any = {};
    try {
      data = await apiGetArticle({ article_id: id });
    } catch (e) {
      console.log("Nguyen C: subcategories.component.tsx, F: e, N: error ", e);
    }

    setLocalComp((prevState: any) => ({
      ...prevState,
      data,
      isLoading: false,
      isFirstLoad: false,
    }));
  }, [id]);

  useEffect(() => {
    if (!openDialog) {
      return;
    }
    fetchMyAPI().then();
  }, [openDialog, fetchMyAPI]);

  return { localComp };
};

export default useDialogHook;
