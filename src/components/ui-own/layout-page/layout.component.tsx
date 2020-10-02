import React from "react";
import style from "./layout.module.scss";
import { useSelector } from "react-redux";
import { layoutSelector } from "store/modules/layout/layout.selector";

import classnames from "classnames";

const LayoutPage: React.FC<any> = (props) => {
  const layoutState = useSelector(layoutSelector);

  return (
    <div
      className={classnames(style.layout, {
        [style["layout--close"]]: layoutState.close,
      })}
      {...props}
    ></div>
  );
};

export { LayoutPage };
