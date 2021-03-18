import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const RegistrationForm = ({ setLoggedIn, setUserId }) => {
  const [usernameRegistration, setUsernameRegistration] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [passwordRegistration, setPasswordRegistration] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { t } = useTranslation();

  const sendRegistration = async (event) => {
    event.preventDefault();

    try {
      const response = await axios
        .post(`/api/register`, {
          username: usernameRegistration,
          password: passwordRegistration,
          email: emailAddress,
        })
        .catch(function (error) {
          console.log(error);
        });
      setUserId(response.data.id);
      setLoggedIn(response.data);
    } catch (e) {
      console.log("CONFLICT");
    }
  };

  return (
    <div className="row">
      <div>
        <h2> {t("registration")} </h2>
        <form onSubmit={sendRegistration}>
          <div>
            <label>
              {t("username")}
              <input
                type="text"
                name="username"
                value={usernameRegistration}
                placeholder={t("typeUsername")}
                required
                onChange={(e) => setUsernameRegistration(e.target.value)}
              />
            </label>
          </div>

          <label>
            {t("email")}
            <input
              type="text"
              name="email"
              value={emailAddress}
              placeholder={t("typeEmail")}
              required
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </label>
          <label>
            {t("password")}
            <input
              type="password"
              name="passwordRegistration"
              value={passwordRegistration}
              placeholder={t("typePassword")}
              required
              onChange={(e) => setPasswordRegistration(e.target.value)}
            />
          </label>
          <label>
            {t("confirmPassword")}
            <input
              type="password"
              name="email"
              value={confirmPassword}
              placeholder={t("onceMore")}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <input type="submit" className="regbutton" />
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
