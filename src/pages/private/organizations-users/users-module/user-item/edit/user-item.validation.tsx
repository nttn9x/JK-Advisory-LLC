import * as Yup from "yup";

const UserSchema: any = Yup.object().shape({
  username: Yup.string().required("this_field_is_required"),
  last_name: Yup.string().required("this_field_is_required"),
  first_name: Yup.string().required("this_field_is_required"),
  password: Yup.string()
    .min(6, "error_password_min")
    .required("this_field_is_required"),
  email: Yup.string().required("this_field_is_required").email(),
  organization_id: Yup.string().required("this_field_is_required"),
});

const AdminSchema = Yup.object()
  .shape({
    secretKey: Yup.string().required("this_field_is_required"),
  })
  .concat(UserSchema);

export { UserSchema, AdminSchema };
