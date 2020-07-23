import React from "react";

import { Typography, Tooltip } from "components/ui-libraries";

import { useThemesContext } from "context/theme.context";

export default function TypographyOwn({ title, ...props }: any) {
  const { isMobile } = useThemesContext();

  if (!title || title.length < 1) {
    return (
      <Typography {...props} noWrap style={{ color: "transparent" }}>
        {"N/A"}
      </Typography>
    );
  }

  return (
    <Tooltip title={title || " "} placement="top-start">
      <Typography {...props} noWrap={!isMobile}>
        {title}
      </Typography>
    </Tooltip>
  );
}
