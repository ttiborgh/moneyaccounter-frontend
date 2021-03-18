import React from "react";
import Sparschwein from "../resources/sparschwein-gothic.png";
import SwitchLanguage from "./SwitchLanguage";
import LoginDropdown from "./login/LoginDropdown";

const Header = ({ setLoggedIn, setUserId }) => {
  return (
    <div className="container-fluid header">
      <div className="row">
        <div className="col-9 my-1">
          <img src={Sparschwein} alt="CompanyLogo" />
        </div>
        <div className="col-1 my-auto">
          <LoginDropdown setUserId={setUserId} setLoggedIn={setLoggedIn} />
        </div>
        <div className="col-2 my-auto">
          <SwitchLanguage />
        </div>
      </div>
    </div>
  );
};

export default Header;
