import React, { useMemo, useState } from "react";
import styles from "./login-form.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "clsx";

import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "components/ui-libraries";
import { useThemesContext } from "context/theme.context";
import { VisibilityIcon, VisibilityOffIcon } from "components/icons";

const LoginForm = (props: any) => {
  const { values, touched, errors, handleBlur, handleChange } = props;
  const { t } = useTranslation(["common", "error"]);
  const [show, setShow] = useState<boolean>(false);
  const { isMobile } = useThemesContext();

  const isEmailError = useMemo(() => errors.username && touched.username, [
    errors.username,
    touched.username,
  ]);
  const isPasswordError = useMemo(() => errors.password && touched.password, [
    errors.password,
    touched.password,
  ]);

  const handleShowChange = () => {
    setShow(!show);
  };

  return (
    <Grid container spacing={2} direction={"column"}>
      <Grid item xs={12} container alignItems={"center"} direction={"column"}>
        <Typography variant={"h5"} className={styles.title} align={"center"}>
          JK Advisory LLC
        </Typography>
      </Grid>
      <Grid item>
        <input type="text" name="username" style={{ display: "none" }} />
        <input type="password" name="password" style={{ display: "none" }} />
        <TextField
          fullWidth
          label={t("username")}
          error={isEmailError}
          onChange={handleChange("username")}
          value={values.username}
          helperText={isEmailError && t(`error:${errors.username}`)}
          onBlur={handleBlur}
          name={"username"}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowChange}
                  edge="end"
                >
                  {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={isPasswordError}
          label={t("password")}
          defaultValue={values.password}
          helperText={isPasswordError && t(`error:${errors.password}`)}
          type={show ? "text" : "password"}
          onChange={handleChange("password")}
          onBlur={handleBlur}
          name={"password"}
        />
      </Grid>
      <Grid item container justify={isMobile ? "center" : "center"}>
        <Button
          fullWidth
          className={classNames(styles.button)}
          variant="contained"
          color={"primary"}
          type={"submit"}
        >
          {t("log_in")}
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
