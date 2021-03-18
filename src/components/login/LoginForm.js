import axios from "axios";
import React from "react";
import { useTranslation } from "react-i18next";
import RegLoginButton from "../RegLoginButton";
import { Formik, Form } from "formik";
import loginValidationSchema from "../../validations.js/loginValidation";
import InputField from "../InputField";

const LoginForm = ({ setLoggedIn, setUserId }) => {
  const { t } = useTranslation();

  const sendLoginRequest = async (value) => {
    try {
      const response = await axios.post(
        `/api/login?username=${value.username}&password=${value.password}`
      );
      setUserId(response.data.id);
      setLoggedIn(response.data);
    } catch (error) {
      console.log(error.status);
    }
  };

  return (
    <div className="row loginpanel">
      <h3> {t("loginTitle")} </h3>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={loginValidationSchema(t("required"))}
        onSubmit={sendLoginRequest}
      >
        <Form>
          <InputField
            type="text"
            name="username"
            placeholder={t("typeUsername")}
          />
          <InputField
            type="password"
            name="password"
            placeholder={t("typePassword")}
          />
          <RegLoginButton buttonText={t("submitLogin")} />
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
