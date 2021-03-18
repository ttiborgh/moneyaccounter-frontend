import React from "react";
import RegistrationPage from "./RegistrationForm";
import logo from "../../resources/piggybank.png";

const Registration = ({ setLoggedIn, setUserId }) => {
  return (
    <div className="row">
      <div className="col-4">
        <RegistrationPage setLoggedIn={setLoggedIn} setUserId={setUserId} />
      </div>
      <div className="col-8">
      </div>
    </div>
  );
};

export default Registration;
