import React from "react";

import { Grid, Skeleton } from "components/ui-libraries";

export const PlaceHolderDetail: React.SFC<any> = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Skeleton variant="rect" height={100} />
        <Skeleton />
        <Skeleton width="60%" />
        <Skeleton width="40%" />
      </Grid>
    </Grid>
  );
};
