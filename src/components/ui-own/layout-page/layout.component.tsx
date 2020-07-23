import React from "react";
import style from "./layout.module.scss";

import Breadcrumbs from "components/ui-own/breadcrumbs/breadcrumbs.component";

const LayoutPage: React.SFC<any> = props => {
  return (
    <div className={style.layout}>
      <Breadcrumbs gutterBottom />
      <div className={style.layout__body} {...props} />
    </div>
  );
};

export { LayoutPage };
