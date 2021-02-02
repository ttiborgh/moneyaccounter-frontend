import React, { useState } from "react";

const RegistrationPage = ({ setLoggedIn }) => {
  const [usernameRegistration, setUsernameRegistration] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [passwordRegistration, setPasswordRegistration] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const sendRegistration = (e) => {
    // TODO api hivas
    setLoggedIn(true); // ezt az API hivas alapjan fogjuk beallitani
    e.preventDefault();
  };

  return (
    <div>
      <h1> REGISRATION </h1>
      <form onSubmit={sendRegistration}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={usernameRegistration}
            onChange={(e) => setUsernameRegistration(e.target.value)}
          />
        </label>
        <label>
          Email address:
          <input
            type="text"
            name="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="passwordRegistration"
            value={passwordRegistration}
            onChange={(e) => setPasswordRegistration(e.target.value)}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="text"
            name="email"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegistrationPage;
