import React from "react";

import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Link,
  Rating,
  Typography,
} from "components/ui-libraries";
import { LinkIcon } from "components/ui-libraries/icons";
import { ProgressLoader } from "components/ui-own";

import useDialogHook from "./dialog_detail.hook";
import { useProviderContext } from "./new_detail.context";

import { useTranslation } from "react-i18next";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      height: 500,
      width: "100%",
    },
    container: {
      height: "70vh",
      width: "100%",
    },
  })
);

const NewDialog: React.FC<any> = () => {
  const {
    state: { openDialog, body },
    actionHideDialog,
  } = useProviderContext();

  const styles = useStyles();
  const { localComp } = useDialogHook(openDialog, body.id);
  const { t } = useTranslation();

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"lg"}
      open={openDialog}
      onClose={actionHideDialog}
    >
      <DialogContent>
        {localComp.isLoading && (
          <div className={styles.loading}>
            <ProgressLoader />
          </div>
        )}
        {!localComp.isLoading && (
          <Grid container spacing={3} alignItems={"center"}>
            <Grid item>
              <Typography component={"span"} variant={"h5"}>
                {localComp.data.title}
              </Typography>
            </Grid>
            <Grid item>
              <Link
                style={{ marginLeft: 12 }}
                href={localComp.data.link}
                target={"_blank"}
              >
                <LinkIcon />
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Typography
                component={"span"}
                variant={"subtitle2"}
                color={"textSecondary"}
              >
                {localComp.data.publish_date}
              </Typography>
              <Chip
                style={{ fontSize: 18, lineHeight: 26 }}
                color={"primary"}
                label={localComp.data.source}
              />
            </Grid>
            <Grid item xs={12}>
              <div>
                {localComp.data.summarize_text &&
                  localComp.data.summarize_text
                    .split("\n")
                    .map((i: any, key: number) => {
                      return (
                        <p
                          style={{ fontSize: 18, lineHeight: "26px" }}
                          key={key}
                        >
                          {i}
                        </p>
                      );
                    })}
              </div>
              {localComp.data.image_url && (
                <div style={{ textAlign: "center" }}>
                  <img
                    style={{ maxHeight: 500 }}
                    alt={"error"}
                    src={localComp.data.image_url}
                  />
                </div>
              )}
              <div>
                {localComp.data.alltext &&
                  localComp.data.alltext
                    .split("\n")
                    .map((i: any, key: number) => {
                      return (
                        <p
                          style={{ fontSize: 18, lineHeight: "26px" }}
                          key={key}
                        >
                          {i}
                        </p>
                      );
                    })}
              </div>
            </Grid>
            <Grid item>{t("please_rate_the_article")}</Grid>
            <Grid item>
              <Rating name="hover-feedback" precision={0.5} />
            </Grid>
          </Grid>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={actionHideDialog} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewDialog;
