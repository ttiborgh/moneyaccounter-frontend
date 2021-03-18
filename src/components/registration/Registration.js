import React from "react";
import RegistrationPage from "./RegistrationForm";
import logo from "../../resources/piggybank.png";

const Registration = ({ setLoggedIn, setUserId }) => {
  return (
    <div className="row">
      <div className="col-7">Newsfeed</div>
      <div className="col-5">
        <RegistrationPage setLoggedIn={setLoggedIn} setUserId={setUserId} />
      </div>
    </div>
  );
};

export default Registration;
