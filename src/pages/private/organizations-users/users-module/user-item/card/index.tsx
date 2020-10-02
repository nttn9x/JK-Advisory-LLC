import React from "react";

import {
  Grid,
  Avatar,
  IconButton,
  Card,
  CardHeader,
} from "components/ui-libraries";
import { MoreVertIcon } from "components/ui-libraries/icons";
import { TypographyNowrap } from "components/ui-own";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { showEditPopup } from "../user-item.action";
import { useDispatch } from "react-redux";

import { ReactComponent as ManSvg } from "styles/images/man.svg";

export const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    cardContent: {
      flex: 1,
      overflow: "hidden",
    },
    icon: {
      color: theme.palette.grey["400"],
      "&:hover": { color: theme.palette.grey["600"] },
    },
  });
});

const UserItem = React.memo(({ user }: any) => {
  const dispatch = useDispatch();

  function showPopup(e: any) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(showEditPopup(user));
  }

  const styles = useStyles();
  return (
    <Grid item sm={4} md={3}>
      <Card elevation={4}>
        <CardHeader
          classes={{ content: styles.cardContent }}
          avatar={
            <Avatar aria-label="avatar">
              <ManSvg />
            </Avatar>
          }
          action={
            <IconButton
              onClick={showPopup}
              size={"small"}
              classes={{
                root: styles.icon,
              }}
              aria-label="settings"
            >
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <TypographyNowrap title={user.username}>
              {user.username}
            </TypographyNowrap>
          }
          subheader={
            <TypographyNowrap title={user.fullName}>
              {user.fullName}
            </TypographyNowrap>
          }
        />
      </Card>
    </Grid>
  );
});

export default UserItem;
