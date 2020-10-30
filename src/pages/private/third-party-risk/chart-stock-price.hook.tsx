import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

import { apiStockPrices } from "services/analytics.service";
import { chartStockPrice } from "./third-party-risk.atom";
import { useTranslation } from "react-i18next";

const useChartStockPriceHook = (name: string) => {
  const { t } = useTranslation();
  const [localComp, setLocalComp] = useRecoilState<any>(chartStockPrice);

  const handleTimeChange = useCallback(
    (time: string) => {
      setLocalComp((prevState: any) => ({
        ...prevState,
        time,
      }));
    },
    [setLocalComp]
  );

  const fetchMyAPI = useCallback(
    async (name) => {
      setLocalComp((prevState: any) => ({
        ...prevState,
        isLoading: true,
      }));

      let data: any = {};
      try {
        data = await apiStockPrices(name);
      } catch (e) {
        console.log(
          "Nguyen C: subcategories.component.tsx, F: e, N: error ",
          e
        );
      }

      const times = Object.keys(data);
      const time = times.length > 0 ? times[0] : null;

      setLocalComp((prevState: any) => ({
        ...prevState,
        isLoading: false,
        isFirstLoad: false,
        times,
        time,
        data,
      }));
    },
    [setLocalComp]
  );

  useEffect(() => {
    if (!name || name.length < 1) return;

    fetchMyAPI(name).then();
  }, [name, fetchMyAPI]);

  return {
    t,
    data: localComp.data,
    time: localComp.time,
    times: localComp.times,
    loading: localComp.isLoading,
    handleTimeChange,
  };
};

export default useChartStockPriceHook;
