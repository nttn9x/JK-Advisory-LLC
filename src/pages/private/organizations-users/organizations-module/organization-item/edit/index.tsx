import React from "react";

import { Formik } from "formik";
import { OrganizationSchema } from "./organization-item.validation";

import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "components/ui-libraries";
import { DialogCustom } from "components/ui-own";
import GeneralForm from "./organization-item-form.components";

import { hideEditPopup, saveOrganization } from "../organizaiton-item.action";

import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: 450,
    },
  })
);

const EditItem: React.FC<any> = ({ index, style, data, actions }: any) => {
  const { isSaving, openEditPopup, organization } = useSelector(
    (state: any) => state.organizations.organizationItem
  );
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const styles = useStyles();

  const handleClose = () => {
    dispatch(hideEditPopup());
  };

  const handleSubmit = (values: any, actions: any) => {
    dispatch(saveOrganization(values));
  };

  return (
    <>
      {organization && (
        <Formik
          initialValues={organization}
          validationSchema={OrganizationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, ...rest }) => {
            return (
              <DialogCustom
                classes={{ paper: styles.container }}
                isLoading={isSaving}
                open={openEditPopup}
                onClose={handleClose}
                aria-labelledby="form-dialog-organization"
              >
                <form onSubmit={handleSubmit}>
                  <DialogTitle id="form-dialog-title">
                    {t("organization")}
                  </DialogTitle>
                  <DialogContent>
                    <GeneralForm propsForm={rest} />
                  </DialogContent>
                  <DialogActions>
                    <Button variant={"contained"} type={"submit"} color="primary">
                      {t(organization.id ? "save" : "create")}
                    </Button>
                  </DialogActions>
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
