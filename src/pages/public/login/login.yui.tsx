import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string().trim().required("this_field_is_required"),
  password: Yup.string().trim().required("this_field_is_required"),
});

export default LoginSchema;
