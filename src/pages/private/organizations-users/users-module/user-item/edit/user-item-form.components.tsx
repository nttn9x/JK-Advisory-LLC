import React from "react";

import { Grid} from "components/ui-libraries";
import FormUser from "./user-item-form-user.components";

const UserItemForm: React.FC<any> = (props) => {
  return (
    <Grid container spacing={3}>
      <FormUser {...props} />
    </Grid>
  );
};

export default UserItemForm;
