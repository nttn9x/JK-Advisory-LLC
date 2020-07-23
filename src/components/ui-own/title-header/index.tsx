import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Typography, { TypographyProps } from "@material-ui/core/Typography";

import { useThemesContext } from "context/theme.context";

const useStyles = makeStyles((theme: Theme) => ({
  bottom: {
    marginBottom: theme.spacing(3)
  }
}));

export default function TitleHeader({ title, ...props }: TypographyProps) {
  const { isMobile } = useThemesContext();
  const classes = useStyles();

  return (
    <div className={classes.bottom}>
      <Typography {...props} variant={isMobile ? "h6" : "h5"} />
    </div>
  );
}
