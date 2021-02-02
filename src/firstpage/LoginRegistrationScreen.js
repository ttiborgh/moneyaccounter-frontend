import React from "react";
import RegistrationPage from "./RegistrationPage";
import LoginForm from "./LoginForm";
import logo from "../resources/piggybank.png";

const LoginRegistrationScreen = ({ setLoggedIn }) => {
  return (
    <div className="row">
      <div className="col-4 regfields">
        <RegistrationPage setLoggedIn={setLoggedIn} />
        <br />
        <LoginForm setLoggedIn={setLoggedIn} />
      </div>
      <div className="col-7">
        <img src={logo} alt="Mister Pig" className="piggy" />
      </div>
    </div>
  );
};

export default LoginRegistrationScreen;
