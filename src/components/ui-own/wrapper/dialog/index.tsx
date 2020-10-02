import React from "react";

import { Dialog } from "components/ui-libraries";
import LoadingComponent from "components/ui-own/progress/loading/loading.component";

const DialogCustom: React.FC<any> = ({ isLoading, children, ...props }: any) => {
  return (
    <Dialog {...props}>
      {!isLoading ? (
        children
      ) : (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
          <LoadingComponent />
        </div>
      )}
    </Dialog>
  );
};

export default DialogCustom;
