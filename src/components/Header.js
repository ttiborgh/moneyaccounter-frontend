import React from "react";
import SwitchLanguage from "./SwitchLanguage";

const Header = () => {
  return (
    <div className="container-fluid m-0">
      <div className="row">
        <div className="col-10">
          <p>Sparschwein</p>
        </div>
        <div className="col-2 d-flex">
          <SwitchLanguage />
        </div>
      </div>
    </div>
  );
};

export default Header;
