import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { Paper, InputBase, IconButton } from "components/ui-libraries";
import { SearchIcon } from "components/ui-libraries/icons";

import { useTranslation } from "react-i18next";
import { KEYBOARD } from "../../../../constants/common";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      backgroundColor: theme.palette.background.default,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    iconSecondary: {
      color: theme.palette.primary.light,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

export default function CustomizedInputBase({ onSearch }: any) {
  const classes = useStyles();
  const [textSearch, setTextSearch] = useState("");
  const { t } = useTranslation(["common"]);

  const handleSearch = () => {
    onSearch({ textSearch });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextSearch(event.target.value);
  };

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    const code = event.keyCode || event.which;
    if (code === KEYBOARD.Enter) {
      onSearch({ textSearch });
    }
  }

  return (
    <Paper elevation={0} className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={t("search")}
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <IconButton
        onClick={handleSearch}
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
