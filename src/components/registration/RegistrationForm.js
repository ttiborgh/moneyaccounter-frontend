import React from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import RegLoginButton from "../RegLoginButton";
import { Formik, Form, Field } from "formik";

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
    <div className="row">
      <h2> {t("registration")} </h2>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        // validate={}
        onSubmit={sendRegistration}
      >
        <Form>
          <Field
            type="text"
            name="username"
            placeholder={t("typeUsername")}
            className="my-2"
          />
          <Field
            type="text"
            name="email"
            placeholder={t("typeEmail")}
            className="my-2"
          />
          <Field
            type="password"
            name="password"
            placeholder={t("password")}
            className="my-2"
          />
          <Field
            type="password"
            name="confirmPassword"
            placeholder={t("confirmPassword")}
            className="my-2"
          />
          <RegLoginButton buttonText={t("register")} />
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
