import * as Yup from "yup";

const OrganizationSchema = Yup.object().shape({
  name: Yup.string().required("this_field_is_required")
});

export { OrganizationSchema };
