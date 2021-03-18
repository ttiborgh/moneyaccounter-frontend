import * as Yup from "yup";

const registrationValidationSchema = (
  usernameLong,
  usernameShort,
  required,
  emailInvalid,
  passwordShort,
  nonMatchingPassword
) =>
  Yup.object().shape({
    username: Yup.string()
      .max(15, usernameLong)
      .min(6, usernameShort)
      .required(required),
    email: Yup.string().email(emailInvalid).required(required),
    password: Yup.string().min(8, passwordShort).required(required),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], nonMatchingPassword)
      .required(required),
  });

export default registrationValidationSchema;
