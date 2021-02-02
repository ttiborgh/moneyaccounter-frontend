import React from "react";
import RegistrationPage from "./RegistrationPage";
import LoginForm from "./LoginForm";

const LoginRegistrationScreen = ({ setLoggedIn }) => {
  return (
    <div>
      <RegistrationPage setLoggedIn={setLoggedIn} />
      <LoginForm setLoggedIn={setLoggedIn} />
    </div>
  );
};

export default LoginRegistrationScreen;
