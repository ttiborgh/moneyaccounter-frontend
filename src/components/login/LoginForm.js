import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import RegLoginButton from "../RegLoginButton";

const LoginForm = ({ setLoggedIn, setUserId }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();

  const sendLoginRequest = async (event) => {
    event.preventDefault();

    try {
      const response = await axios
        .post(`/api/login?username=${username}&password=${password}`)
        .catch(function (error) {
          console.log(error);
        });
      setUserId(response.data.id);
      setLoggedIn(response.data);
    } catch (error) {
      console.log(error.status);
    }
  };

  return (
    <div className="row loginpanel">
      <h3> {t("loginTitle")} </h3>
      <div>
        <form onSubmit={sendLoginRequest}>
          <label>
            {t("username")}
            <input
              type="text"
              name="username"
              placeholder={t("typeUsername")}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            {t("password")}
            <input
              type="password"
              name="password"
              placeholder={t("typePassword")}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </form>
        <RegLoginButton buttonText={t("submitLogin")} />
      </div>
    </div>
  );
};

export default LoginForm;
