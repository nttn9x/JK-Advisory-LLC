import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { IconButton, InputBase, Paper } from "components/ui-libraries";
import { SearchIcon } from "components/ui-libraries/icons";

import { useTranslation } from "react-i18next";

import { KEYBOARD } from "constants/common";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(1.5),
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  })
);

const Filter: React.FC<any> = ({ setTextSearch }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const code = event.keyCode || event.which;
    if (code === KEYBOARD.Enter) {
      handleSearch();
    }
  };

  const handleSearch = () => {
    setTextSearch(value);
  };

  return (
    <Paper className={classes.container}>
      <InputBase
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        placeholder={t("search")}
        className={classes.input}
        value={value}
      />
      <IconButton onClick={handleSearch} className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Filter;
