import React from "react";

import Typography, { TypographyProps } from "@material-ui/core/Typography";

export default function TitleLabel(props: TypographyProps) {
  return <Typography {...props} color="textSecondary" variant="body2" />;
}
