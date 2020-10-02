import React, { useState } from "react";
import styles from "components/ui-own/table/table.module.scss";

import { InputBase, IconButton, Tooltip } from "components/ui-libraries";

import { SearchIcon } from "components/ui-libraries/icons";

import { useTranslation } from "react-i18next";

import { useBackgroundStyles } from "utils/theme.util";

import { KEYBOARD } from "constants/common";

const InputSearch: React.FC<any> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState<string>("");
  const { t } = useTranslation(["common"]);
  const classOwns = useBackgroundStyles();

  function handleSearch() {
    onSearch({ keyword });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    const code = event.keyCode || event.which;
    if (code === KEYBOARD.Enter) {
      handleSearch();
    }
  }

  return (
    <div className={styles.search__filter}>
      <div className={`${styles.search__input} ${classOwns.bg}`}>
        <InputBase
          value={keyword}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          className={styles.search__input_input}
          placeholder={t("search")}
          inputProps={{ "aria-label": "input search", maxLength: 50 }}
        />
        <Tooltip title={t("search")} placement="top">
          <IconButton onClick={handleSearch} aria-label="search" size="small">
            <SearchIcon color="action" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default InputSearch;
