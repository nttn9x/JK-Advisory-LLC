import React from "react";

import { Grid, Typography } from "components/ui-libraries";
import { ContainerPaper } from "components/ui-own";

import useOrganizationDetailHook from "./organization-detail.hook";

import { useTranslation } from "react-i18next";

const OrganizationDetail: React.FC<any> = () => {
  const {
    state: { organization },
  } = useOrganizationDetailHook();
  const { t } = useTranslation();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ContainerPaper padding>
          <Typography variant={"h5"} gutterBottom>
            {t("organization")}
          </Typography>
          {organization.name}
        </ContainerPaper>
      </Grid>
    </Grid>
  );
};

export default OrganizationDetail;
