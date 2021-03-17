import React from "react";
import RegistrationPage from "./RegistrationPage";
import LoginForm from "./LoginForm";
import logo from "../resources/piggybank.png";

const LoginRegistrationPage = ({ setLoggedIn, setUserId }) => {
  return (
    <div className="row">
      <div className="col-4">
        <RegistrationPage setLoggedIn={setLoggedIn} setUserId={setUserId} />
        <br />
        <LoginForm setLoggedIn={setLoggedIn} setUserId={setUserId} />
      </div>
      <div className="col-8">
        <img
          src={logo}
          alt="Mister Pig"
          className="moveArrow"
          style={{ width: "450px" }}
        />
      </div>
    </div>
  );
};

export default LoginRegistrationPage;
