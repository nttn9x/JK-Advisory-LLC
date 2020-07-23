import React from "react";

import { Typography, Tooltip } from "components/ui-libraries";

export default function TitleAttribute({ title, ...props }: any) {
  return (
    <Tooltip title={title || " "} placement="top-start">
      <Typography color="textPrimary" noWrap {...props} />
    </Tooltip>
  );
}
