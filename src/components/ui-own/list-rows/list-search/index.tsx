import React from "react";

import { Grid, Button, Tooltip } from "components/ui-libraries";
import { AddIcon } from "components/ui-libraries/icons";
import { TypographyNowrap } from "components/ui-own";
import Search from "./search";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { useTranslation } from "react-i18next";

export const useHeaderStyles = makeStyles((theme: Theme) => {
  const spacing = theme.spacing(1.5);

  return createStyles({
    container: {
      paddingRight: spacing,
      paddingLeft: spacing,
      paddingBottom: spacing,
    },
    title: {
      height: 32,
    },
    button: {
      minWidth: 44,
      width: 44,
    },
    icon: {
      margin: 0,
    },
  });
});

const Header = ({ title, onAdd, onSearch }: any) => {
  const { t } = useTranslation(["common"]);
  const styles = useHeaderStyles();
  return (
    <Grid
      className={styles.container}
      container
      alignItems={"center"}
      justify={"space-between"}
      spacing={1}
    >
      <Grid item>
        <TypographyNowrap variant={"subtitle2"} color={"textSecondary"}>
          {title}
        </TypographyNowrap>
      </Grid>
      {onAdd && (
        <Grid item>
          <Tooltip title={t("add")}>
            <Button
              onClick={onAdd}
              className={styles.button}
              classes={{ startIcon: styles.icon }}
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
            >
              {" "}
            </Button>
          </Tooltip>
        </Grid>
      )}
      <Grid item xs={12}>
        <Search onSearch={onSearch} />
      </Grid>
    </Grid>
  );
};

export default Header;
