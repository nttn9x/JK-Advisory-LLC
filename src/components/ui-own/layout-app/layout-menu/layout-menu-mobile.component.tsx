import React from "react";

import {
  Menu,
  MenuItem,
  ListItemIcon,
  Typography
} from "components/ui-libraries";

import { SIDE_BAR } from "constants/navigation";

import { useTranslation } from "react-i18next";

interface ILayoutMenuMobile {
  menuEl: any;
  doChangePage: any;
  handleClose: any;
}

const LayoutMenuMobile: React.FC<ILayoutMenuMobile> = ({
  menuEl,
  handleClose,
  doChangePage
}) => {
  const { t } = useTranslation(["common"]);

  return (
    <Menu
      id="simple-menu"
      anchorEl={menuEl}
      keepMounted
      open={Boolean(menuEl)}
      onClose={handleClose}
    >
      {SIDE_BAR.map((e: any, i: number) => {
        if (e.isHide) {
          return null;
        }

        return (
          <MenuItem key={i} onClick={() => doChangePage(e.linkTo)}>
            <ListItemIcon>{e.icon}</ListItemIcon>
            <Typography variant="inherit"> {t(e.keyi18n)}</Typography>
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default LayoutMenuMobile;
