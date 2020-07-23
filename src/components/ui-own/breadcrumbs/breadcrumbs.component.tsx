import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { Breadcrumbs, Typography } from "../../ui-libraries";

import { HomeIcon } from "../../ui-libraries/icons";

import { useTranslation } from "react-i18next";
import classenames from "classnames";

import { ROUTES } from "constants/navigation";

const useStyles = makeStyles((theme: Theme) => ({
  breadcrumbs: {
    display: "flex",
    alignItems: "flex-end",
    "& a, li, ol, p": {
      display: "flex",
      alignItems: "flex-end",
      cursor: "pointer",
      "& svg": {
        marginRight: theme.spacing(3 / 2)
      }
    },
    "& a:hover": {
      textDecorationLine: "underline"
    }
  },
  breadcrumbBottom: {
    marginBottom: theme.spacing(3)
  },
  breadcrumbGutter: {
    margin: `${theme.spacing(3)}px 0`
  }
}));

const BreadcrumbsComp: React.FC<any> = props => {
  const classes = useStyles();
  const { t } = useTranslation(["common"]);
  const [paths, setPaths] = useState<any>([]);
  const { match, gutter, gutterBottom } = props;

  useEffect(() => {
    const { url, path }: any = match;
    const pathNames: string[] = path.split("/");
    const params: string[] = url.split("/");

    const p: any = [
      {
        i18n: "dashboard",
        path: ROUTES.Dashboard
      }
    ];

    if (params.length > 1) {
      for (let i = 1; i < params.length; i++) {
        if (ROUTES.Dashboard === `/${params[i]}`) {
          continue;
        }

        let str = "";
        for (let j = 1; j < i; j++) {
          str = `${str}/${params[j]}`;
        }

        str = `${str}/${params[i]}`;

        const pathName = pathNames[i];
        const i18n = !pathName.includes(":")
          ? pathName.replace("-", "_")
          : `url_${pathName.substr(1)}`;

        p.push({
          i18n,
          path: str
        });
      }
    }
    setPaths(p);
  }, [match]);

  return (
    <Breadcrumbs
      className={classenames(classes.breadcrumbs, {
        [classes.breadcrumbBottom]: Boolean(gutterBottom),
        [classes.breadcrumbGutter]: Boolean(gutter)
      })}
      aria-label="breadcrumb"
    >
      {paths.map((e: any, i: number) => {
        if (i + 1 === paths.length) {
          return (
            <Typography key={i} variant="body2" color="textPrimary">
              {i === 0 && <HomeIcon />}
              {t(e.i18n)}
            </Typography>
          );
        }

        return (
          <Link key={i} to={e.path}>
            {i === 0 && <HomeIcon />}
            <Typography variant="body2" key={i}>
              {t(e.i18n)}
            </Typography>
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default withRouter(BreadcrumbsComp);
