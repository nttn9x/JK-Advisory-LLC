import React from "react";
import styles from "./login.module.scss";

import { useTranslation } from "react-i18next";
import { Redirect } from "react-router-dom";
import { Formik } from "formik";

import { ROUTES } from "constants/navigation";
import { DefaultProgress } from "components/ui-own";

import LoginSchema from "./login.yui";
import LoginForm from "./login-form.component";

import useLoginHook from "./login.hook";
import { getUser } from "utils/auth.util";

// Load before access home page, improve user experience
import(/* webpackPrefetch: true */ "pages/private/dashboard");

interface ILogin {
  history: any;
}

const Login: React.FC<ILogin> = ({ history }) => {
  const user = getUser();
  const { t } = useTranslation(["login", "common"]);
  const { loading, onSubmit } = useLoginHook({ history });

  if (user) {
    return <Redirect to={ROUTES.Dashboard} />;
  }

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, ...rest }) => {
        return (
          <>
            <div className={styles.bg}></div>
            <form
              id={"bg-login"}
              autoComplete="off"
              className={styles.container}
              onSubmit={handleSubmit}
            >
              <div className={styles.container__form}>
                {loading ? (
                  <div className={styles.loading}>
                    <DefaultProgress message={t("common:please_wait")} />
                  </div>
                ) : (
                  <LoginForm {...rest} />
                )}
              </div>
            </form>
          </>
        );
      }}
    </Formik>
  );
};

export default Login;
