import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useChipStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      height: "21px !important",
      borderRadius: `${theme.shape.borderRadius}px !important`,
      fontWeight: 500,
    },
    chip__success: {
      color: `${theme.palette.getContrastText("#689f38")} !important`,
      backgroundColor: "#689f38 !important",
      borderColor: "#558b2f !important",
    },
    chip__error: {
      color: `${theme.palette.getContrastText(
        theme.palette.error.main
      )} !important`,
      backgroundColor: `${theme.palette.error.main} !important`,
      borderColor: `${theme.palette.error.dark} !important`,
    },
    chip__fullWidth: {
      width: "100%",
    },
  })
);

export const useBackgroundStyles = makeStyles((theme: Theme) =>
  createStyles({
    bg: {
      backgroundColor: `${theme.palette.background.default} !important`,
    },
  })
);

export const useCloseStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      position: "absolute",
      top: theme.spacing(3),
      right: theme.spacing(3),
      width: 28,
      height: 28,
      minHeight: 28,
      boxShadow: theme.shadows[1],
      backgroundColor: theme.palette.background.paper,
    },
  })
);
