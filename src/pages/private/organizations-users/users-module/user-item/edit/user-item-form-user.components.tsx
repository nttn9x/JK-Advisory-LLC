import React from "react";

import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "components/ui-libraries";
import { ContainerPaper } from "components/ui-own";
import { useTranslation } from "react-i18next";

const UserItemFormUser: React.FC<any> = ({
  organizations,
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  const { t } = useTranslation();
  const isErrorUserName = touched.username && Boolean(errors.username);
  const isErrorFirstName = touched.first_name && Boolean(errors.first_name);
  const isErrorLastName = touched.last_name && Boolean(errors.last_name);
  const isErrorSecretKey = touched.secretKey && Boolean(errors.secretKey);
  const isErrorPassword = touched.password && Boolean(errors.password);
  const isErrorEmail = touched.email && Boolean(errors.email);
  const isErrorOrg = touched.organization_id && Boolean(errors.organization_id);

  return (
    <Grid item xs={12}>
      <ContainerPaper padding elevation={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth error={isErrorUserName}>
              <InputLabel required htmlFor="component-helper">
                {t("username")}
              </InputLabel>
              <Input
                autoFocus
                autoComplete="new-password"
                value={values.username || ""}
                name="username"
                inputProps={{
                  "aria-label": "username",
                }}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <FormHelperText>
                {isErrorUserName && t(`${errors.username}`)}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth error={isErrorPassword}>
              <InputLabel required htmlFor="component-helper">
                {t("password")}
              </InputLabel>
              <Input
                autoComplete="new-password"
                value={values.password || ""}
                name="password"
                inputProps={{
                  "aria-label": "password",
                }}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <FormHelperText>
                {isErrorPassword && t(`${errors.password}`)}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth error={isErrorFirstName}>
              <InputLabel required>{t("first_name")}</InputLabel>
              <Input
                value={values.first_name || ""}
                name="first_name"
                inputProps={{
                  "aria-label": "first_name",
                }}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <FormHelperText>
                {isErrorFirstName && t(`${errors.first_name}`)}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth error={isErrorFirstName}>
              <InputLabel required>{t("last_name")}</InputLabel>
              <Input
                value={values.last_name || ""}
                name="last_name"
                inputProps={{
                  "aria-label": "last_name",
                }}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <FormHelperText>
                {isErrorLastName && t(`${errors.last_name}`)}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth error={isErrorEmail}>
              <InputLabel required>{t("email")}</InputLabel>
              <Input
                value={values.email || ""}
                name="email"
                inputProps={{
                  "aria-label": "email",
                }}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <FormHelperText>
                {isErrorEmail && t(`${errors.email}`)}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel required>{t("organization")}</InputLabel>
              <Select
                name={"organization_id"}
                value={values.organization_id}
                onChange={handleChange}
              >
                {organizations.map((r: any, i: number) => {
                  return (
                    <MenuItem key={i} value={r.id}>
                      {r.name}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText>
                {isErrorOrg && t(`${errors.organization_id}`)}
              </FormHelperText>
            </FormControl>
          </Grid>
          {values.isRoot && (
            <Grid item xs={12}>
              <FormControl fullWidth error={isErrorSecretKey}>
                <InputLabel required htmlFor="component-helper">
                  {t("secret_key")}
                </InputLabel>
                <Input
                  value={values.secretKey}
                  name="secretKey"
                  inputProps={{
                    "aria-label": "secretKey",
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <FormHelperText>
                  {isErrorSecretKey && t(`${errors.secretKey}`)}
                </FormHelperText>
              </FormControl>
            </Grid>
          )}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  name="active"
                  checked={values.active || false}
                  onChange={handleChange}
                />
              }
              label={t("active")}
            />
          </Grid>
        </Grid>
      </ContainerPaper>
    </Grid>
  );
};

export default UserItemFormUser;
