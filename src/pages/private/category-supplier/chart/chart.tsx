import React, { useCallback, useState } from "react";

import { useTranslation } from "react-i18next";
import { Button, ButtonGroup } from "components/ui-libraries";

import ChartContingent from "./chart-contingent";
import ChartUnemployment from "./chart-unemployment";

const SubCategory: React.FC<any> = ({ category_name }) => {
  const [localComp, setLocalComp] = useState<any>({
    tabIndex: 0,
  });
  const { t } = useTranslation();

  const handleFirstClick = useCallback(() => {
    setLocalComp({ tabIndex: 0 });
  }, []);

  const handleSecondClick = useCallback(() => {
    setLocalComp({ tabIndex: 1 });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ margin: "auto" }}>
        <ButtonGroup aria-label="outlined primary button group">
          <Button
            onClick={handleFirstClick}
            color={localComp.tabIndex === 0 ? "secondary" : "default"}
          >
            {t("unemployment_rate")}
          </Button>
          <Button
            onClick={handleSecondClick}
            color={localComp.tabIndex === 1 ? "secondary" : "default"}
          >
            {t("contingent_work_revenue")}
          </Button>
        </ButtonGroup>
      </div>

      {localComp.tabIndex === 0 ? (
        <ChartUnemployment category_name={category_name} />
      ) : (
        <ChartContingent category_name={category_name} />
      )}
    </div>
  );
};

export default SubCategory;
