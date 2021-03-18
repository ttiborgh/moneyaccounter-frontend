import React from "react";
import RegistrationForm from "./registration/RegistrationForm";
import Newsfeed from "./newsfeed/Newsfeed";

const OpeningPage = ({ setLoggedIn, setUserId }) => {
  return (
    <div className="row">
      <div className="col-8 mt-4">
        <Newsfeed />
      </div>
      <div className="col-4 mt-4">
        <RegistrationForm setLoggedIn={setLoggedIn} setUserId={setUserId} />
      </div>
    </div>
  );
};

export default OpeningPage;
