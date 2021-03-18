import React from "react";
import RegistrationForm from "./registration/RegistrationForm";

const OpeningPage = ({ setLoggedIn, setUserId }) => {
  return (
    <div className="row">
      <div className="col-7">Newsfeed</div>
      <div className="col-5">
        <RegistrationForm setLoggedIn={setLoggedIn} setUserId={setUserId} />
      </div>
    </div>
  );
};

export default OpeningPage;
