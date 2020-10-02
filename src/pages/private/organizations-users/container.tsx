import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { ContainerDiv } from "components/ui-own";

import Users from "./users-module/user-list";
import UserEdit from "./users-module/user-item/edit";
import Organizations from "./organizations-module";
import OrganizationEdit from "./organizations-module/organization-item/edit";
import { isDarkThemeMode } from "utils/setting-themes";

export const useBackgroundStyles = makeStyles((theme: Theme) => {
  const spacing = `${theme.spacing(1.5)}px 0`;
  return createStyles({
    container: {
      display: "flex",
      height: "100%",
      flexDirection: "row",
      backgroundColor: isDarkThemeMode()
        ? theme.palette.grey["600"]
        : theme.palette.grey["300"],
      borderRadius: theme.shape.borderRadius * 2,
    },
    organization: {
      flex: "0 0 250px",
      padding: spacing,
      backgroundColor: theme.palette.background.paper,
    },
    user: {
      flex: 1,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    },
    detail: {
      flex: 1,
      padding: spacing,
      backgroundColor: theme.palette.grey["300"],
    },
  });
});

const OrganizationContainer: React.FC<any> = ({ history }) => {
  const styles = useBackgroundStyles();
  return (
    <>
      <OrganizationEdit />
      <UserEdit />
      <ContainerDiv elevation={0} className={styles.container}>
        <ContainerDiv className={styles.organization}>
          <Organizations />
        </ContainerDiv>
        <ContainerDiv className={styles.user}>
          <Users />
        </ContainerDiv>
      </ContainerDiv>
    </>
  );
};

export default OrganizationContainer;
