import React from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import RegLoginButton from "../RegLoginButton";
import { Formik, Form } from "formik";
import validationSchema from "../validations";
import InputField from "./InputField";

const RegistrationForm = ({ setLoggedIn, setUserId }) => {
  const { t } = useTranslation();

  const sendRegistration = async (value) => {
    try {
      const response = await axios.post(`/api/register`, value);
      setUserId(response.data.id);
      setLoggedIn(response.data);
    } catch (e) {
      console.log("CONFLICT");
    }
  };

  return (
    <>
      <h3> {t("registration")} </h3>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema(
          t("usernameLong"),
          t("usernameShort"),
          t("required"),
          t("emailInvalid"),
          t("passwordShort"),
          t("nonMatchingPassword")
        )}
        onSubmit={sendRegistration}
      >
        <Form>
          <InputField
            type="text"
            name="username"
            placeholder={t("typeUsername")}
          />
          <InputField type="text" name="email" placeholder={t("typeEmail")} />
          <InputField
            type="password"
            name="password"
            placeholder={t("password")}
            className="my-2"
          />
          <InputField
            type="password"
            name="confirmPassword"
            placeholder={t("confirmPassword")}
            className="my-2"
          />
          <RegLoginButton buttonText={t("register")} />
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;
