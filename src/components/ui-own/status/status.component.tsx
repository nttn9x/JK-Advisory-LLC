import React from "react";

import { Chip, Tooltip } from "../../ui-libraries";

import { useChipStyles } from "utils/theme.utils";

import classnames from "classnames";

interface IProps {
  label?: string;
  fullWidth?: boolean;
  showText?: boolean;
}

const Status: React.FC<IProps> = ({ label, showText, fullWidth }) => {
  const classesChip = useChipStyles();

  const body = (
    <Chip
      label={Boolean(showText) ? label : ""}
      className={classnames(classesChip.chip, {
        [classesChip["chip__success"]]:
          label === "Approved" ||
          label === "Approved by AM" ||
          label === "KYC Approved",
        [classesChip["chip__error"]]:
          label === "Rejected" || label === "KYC Not Submitted",
        [classesChip["chip__fullWidth"]]: Boolean(fullWidth),
      })}
    />
  );

  if (Boolean(showText)) {
    return body;
  }

  return <Tooltip title={label}>{body}</Tooltip>;
};

export default Status;
