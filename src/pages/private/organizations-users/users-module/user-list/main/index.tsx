import React from "react";

import {
  createStyles,
  fade,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";

import { Button, Grid, Pagination } from "components/ui-libraries";
import UserItem from "../../user-item/card";

import useUserHook from "./user-list.hook";

import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { showEditPopup } from "../../user-item/user-item.action";
import { changePage } from "./user-list.action";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pagination: {
      padding: theme.spacing(1.5),
      display: "flex",
      justifyContent: "center",
    },
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      padding: `0 ${theme.spacing(1.5)}px`,
      "overflow-x": "hidden !important",
    },
  })
);

export const useButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      height: 80,
      width: "100%",
      backgroundColor: theme.palette.background.paper,

      "&:hover": {
        backgroundColor: fade(
          theme.palette.secondary.main,
          theme.palette.action.hoverOpacity
        ),
      },
    },
  })
);

const AddButton = () => {
  const styles = useButtonStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  function showPopup(e: any) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(showEditPopup());
  }

  return (
    <Grid item sm={4} md={3}>
      <Button
        onClick={showPopup}
        variant={"outlined"}
        color={"secondary"}
        className={styles.button}
      >
        {t("add")}
      </Button>
    </Grid>
  );
};

const UserList: React.FC<any> = () => {
  const {
    state: {
      userList: {
        users,
        params: { totalPage, page },
      },
    },
  } = useUserHook();
  const dispatch = useDispatch();
  const styles = useStyles();

  const handleChange = (event: any, value: number) => {
    dispatch(changePage(value));
  };

  return (
    <>
      <div className={classNames(styles.container, "scrollbar")}>
        <Grid container spacing={3}>
          <AddButton />
          {users.map((user: any, i: number) => (
            <UserItem key={i} user={user} />
          ))}
        </Grid>
      </div>
      <div className={styles.pagination}>
        <Pagination count={totalPage} page={page} onChange={handleChange} />
      </div>
    </>
  );
};

export default UserList;
