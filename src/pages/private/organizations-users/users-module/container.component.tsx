import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import UserList from "./user-list";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
  })
);

const UserContainer: React.FC<any> = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <UserList />
    </div>
  );
};

export default UserContainer;
