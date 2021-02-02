import React, { useState } from "react";
import axios from "axios";

const RegistrationPage = ({ setLoggedIn }) => {
  const [usernameRegistration, setUsernameRegistration] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [passwordRegistration, setPasswordRegistration] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const sendRegistration = async (event) => {
    event.preventDefault();

    const response = await axios
      .post(`/api/register`, {
        username: usernameRegistration,
        password: passwordRegistration,
        emailAddress: emailAddress,
      })
      .catch(function (error) {
        console.log(error);
      });

    setLoggedIn(response.data);
  };

  return (
    <div className="row">
      <div className="col-3">
        <h3> REGISTRATION </h3>
        <form onSubmit={sendRegistration}>
          <div>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={usernameRegistration}
                placeholder="Type in your username"
                required
                onChange={(e) => setUsernameRegistration(e.target.value)}
              />
            </label>
          </div>

          <label>
            Email address:
            <input
              type="text"
              name="email"
              value={emailAddress}
              placeholder="Type in your email address"
              required
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="passwordRegistration"
              value={passwordRegistration}
              placeholder="Type in your password"
              required
              onChange={(e) => setPasswordRegistration(e.target.value)}
            />
          </label>
          <label>
            Confirm password:
            <input
              type="text"
              name="email"
              value={confirmPassword}
              placeholder="Once more..."
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

export default RegistrationPage;
