import React from "react";

import { Formik } from "formik";
import { UserSchema, AdminSchema } from "./user-item.validation";

import { Button, AppBar, Toolbar, IconButton, Typography } from "components/ui-libraries";
import { DialogCustom } from "components/ui-own";
import { CloseIcon } from "components/ui-libraries/icons/close";

import { hideEditPopup, saveUser } from "../user-item.action";

import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import UserItemFormComponent from "./user-item-form.components";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialog: {
      backgroundColor: theme.palette.background.default,
    },
    container: {
      marginTop: 59,
      padding: theme.spacing(3),
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }),
);

const EditItem: React.FC<any> = ({ index, style, data, actions }: any) => {
  const { isSaving, openEditPopup, user } = useSelector((state: any) => state.organizations.userItem);
  const { organizations } = useSelector((state: any) => state.organizations.organizationList);
  const { roles } = useSelector((state: any) => state.common);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const styles = useStyles();

  const handleClose = () => {
    dispatch(hideEditPopup());
  };

  const handleSubmit = (values: any, actions: any) => {
    dispatch(saveUser(values));
  };

  return (
    <>
      {user && (
        <Formik
          initialValues={{ ...user, secretKey: "" }}
          validationSchema={user.isRoot ? AdminSchema : UserSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, ...rest }) => {
            return (
              <DialogCustom
                fullScreen
                scroll={"paper"}
                classes={{ paper: styles.dialog }}
                isLoading={isSaving}
                open={openEditPopup}
                onClose={handleClose}
                aria-labelledby="form-dialog-user"
              >
                <form className={styles.container} onSubmit={handleSubmit}>
                  <AppBar color={"default"}>
                    <Toolbar>
                      <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                      </IconButton>
                      <Typography className={styles.title} variant="h6">
                        {t("user")}
                      </Typography>
                      <Button variant={"contained"} autoFocus type={"submit"} color="primary">
                        {t(user.id ? "save" : "create")}
                      </Button>
                    </Toolbar>
                  </AppBar>

                  <UserItemFormComponent roles={roles} organizations={organizations} {...rest} />
                </form>
              </DialogCustom>
            );
          }}
        </Formik>
      )}
    </>
  );
};

export default EditItem;
