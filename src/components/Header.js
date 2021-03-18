import React from "react";
import SwitchLanguage from "./SwitchLanguage";
import LoginForm from "./LoginForm";
import Sparschwein from "../resources/sparschwein-gothic.png";
import { PeopleFill } from "react-bootstrap-icons";
import { Dropdown } from "react-bootstrap";

const Header = ({ setLoggedIn, setUserId }) => {
  return (
    <div className="container-fluid header">
      <div className="row">
        <div className="col-9">
          <div className="my-1">
            <img src={Sparschwein} alt="CompanyLogo" />
          </div>
        </div>
        <div className="col-1 my-auto">
          <Dropdown drop="down">
            <Dropdown.Toggle variant="none">
              <PeopleFill style={{ fontSize: "2rem" }} />
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ backgroundColor: "antiquewhite" }}>
              <LoginForm setLoggedIn={setLoggedIn} setUserId={setUserId} />
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-2 my-auto">
          <SwitchLanguage />
        </div>
      </div>
    </div>
  );
};

export default Header;
