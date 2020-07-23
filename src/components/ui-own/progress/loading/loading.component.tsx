import React from "react";
import styles from "./loading.module.scss";

import { CircularProgress, Typography } from "components/ui-libraries";

import { useTranslation } from "react-i18next";
import { useThemesContext } from "context/theme.context";

const Loading = ({ label, imageNode }: any) => {
  const { t } = useTranslation(["common"]);
  const { isMobile } = useThemesContext();
  return (
    <div className={styles.loading}>
      {imageNode ? (
        imageNode
      ) : (
        <CircularProgress disableShrink size={isMobile ? 100 : 200}></CircularProgress>
      )}
      <Typography
        className={`${styles.loading_title} animated rubberBand`}
        variant={isMobile ? "subtitle2" : "h6"}
        align="center"
        color="textSecondary"
      >
        {label || t("please_wait")}
      </Typography>
    </div>
  );
};

export default Loading;
