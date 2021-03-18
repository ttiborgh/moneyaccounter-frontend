import * as Yup from "yup";

const Schema = Yup.object().shape({
  username: Yup.string().max(15, "Username too long.").required("No username"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("No password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")])
    .required("No password"),
});

export default Schema;
