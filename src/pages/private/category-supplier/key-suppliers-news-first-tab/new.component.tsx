import React from "react";
import { useRecoilState } from "recoil";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "components/ui-libraries";
import { useTranslation } from "react-i18next";
import { useProviderContext } from "components/ui-own/new_detail/new_detail.context";
import { news } from "../category-supplier.atom";

const New: React.FC<any> = ({ data }) => {
  const { t } = useTranslation();
  const { actionShowDialog } = useProviderContext();
  const [, setLocalComp] = useRecoilState<any>(news);

  const handleViewAll = () => {
    setLocalComp({
      isOpen: true,
      supplier_name: data.name,
    });
  };

  return (
    <Card variant={"outlined"} style={{ margin: "0 12px 12px 12px" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {data.title}
        </Typography>
        <Grid container>
          <Grid item xs={9} container spacing={3}>
            {data.news.map((t: any, i: number) => {
              return (
                <Grid key={i} item xs={12}>
                  <Typography
                    style={{ cursor: "pointer" }}
                    onClick={() => actionShowDialog(t)}
                    component={"p"}
                  >
                    {t.title}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={3} style={{ textAlign: "center" }}>
            <img
              style={{ width: 70, height: 70 }}
              src={data.image}
              alt={"error"}
            />
          </Grid>
        </Grid>
      </CardContent>

      <CardActions disableSpacing>
        <Button onClick={handleViewAll} color="primary">
          {t("view_full")}
        </Button>
      </CardActions>
    </Card>
  );
};

export default New;
