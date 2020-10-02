import React from "react";
import {
  InputLabel,
  FormControl,
  FormHelperText,
  Input,
  FormControlLabel,
  Checkbox,
  Grid,
} from "components/ui-libraries";

import { useTranslation } from "react-i18next";

const ItemForm: React.FC<any> = ({
  propsForm: {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    setFieldValue,
  },
  users,
}) => {
  const { t } = useTranslation(["common"]);
  const isErrorName = touched.name && Boolean(errors.name);
  return (
    <Grid container>
      <Grid item xs={12}>
        <FormControl fullWidth error={isErrorName}>
          <InputLabel required htmlFor="component-helper">
            {t("name")}
          </InputLabel>
          <Input
            autoFocus
            value={values.name || ""}
            name="name"
            inputProps={{
              "aria-label": "Organization name",
            }}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <FormHelperText>{isErrorName && t(`${errors.name}`)}</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              name="active"
              checked={!!values.active || true}
              onChange={handleChange}
            />
          }
          label={t("active")}
        />
      </Grid>
    </Grid>
  );
};

export default ItemForm;
