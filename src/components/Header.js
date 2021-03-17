import React from "react";
import SwitchLanguage from "./SwitchLanguage";
import LoginForm from "./LoginForm"

const Header = ({setLoggedIn, setUserId}) => {
  return (
    <div className="container-fluid m-0 header">
      <div className="row">
        <div className="col-10">
          <p>Sparschwein</p>
        </div>
        <div>
          <LoginForm setLoggedIn={setLoggedIn} setUserId={setUserId} />
        </div>
        <div className="col-2 d-flex">
          <SwitchLanguage />
        </div>
      </div>
    </div>
  );
};

export default Header;
