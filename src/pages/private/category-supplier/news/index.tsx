import React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
} from "components/ui-libraries";

import useDialogHook from "./news.hook";

import { useTranslation } from "react-i18next";
import News from "components/ui-own/news";
import { useProviderContext } from "components/ui-own/new_detail/new_detail.context";

const NewDialog: React.FC<any> = () => {
  const { localComp, actionHideDialog } = useDialogHook();
  const { t } = useTranslation();
  const { actionShowDialog } = useProviderContext();

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"lg"}
      open={localComp.isOpen}
      onClose={actionHideDialog}
    >
      <DialogContent style={{ height: "80vh" }}>
        <News onClick={actionShowDialog} {...localComp} title={t("news")} />
      </DialogContent>
      <DialogActions>
        <Button onClick={actionHideDialog} color="primary">
          {t("close")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewDialog;
