import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import styles from "./layout-sidebar-logo.module.scss";

import { ROUTES } from "constants/navigation";


const LayoutSidebarLogo = React.memo(({ close }: any) => {
  return (
    <Link to={ROUTES.Dashboard}>
      <div
        className={classnames(styles.logo, {
          [styles["logo--close"]]: close,
        })}
      >
        <div
          className={classnames(styles.logo_image, {
            [styles["logo_image--small"]]: close,
          })}
        ></div>
        <div className={classnames(styles.logo_name)}>JK Advisory LLC</div>
      </div>
    </Link>
  );
});

export default LayoutSidebarLogo;
