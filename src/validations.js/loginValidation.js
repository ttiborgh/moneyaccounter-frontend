import * as Yup from "yup";

const loginValidationSchema = (required) =>
  Yup.object().shape({
    password: Yup.string().required(required),
    username: Yup.string().required(required),
  });

export default loginValidationSchema;
