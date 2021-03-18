import React from "react";
import SwitchLanguage from "./SwitchLanguage";
import LoginForm from "./LoginForm";
import { PeopleFill } from "react-bootstrap-icons";
import { Dropdown } from "react-bootstrap";

const Header = ({ setLoggedIn, setUserId }) => {
  return (
    <div className="container-fluid header">
      <div className="row">
        <div className="col-9"></div>
        <div className="col-1 my-2 d-flex">
          <Dropdown drop="down">
            <Dropdown.Toggle variant="none">
              <PeopleFill style={{ fontSize: "2rem" }} />
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ backgroundColor: "antiquewhite" }}>
              <LoginForm setLoggedIn={setLoggedIn} setUserId={setUserId} />
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-2 my-2 d-flex">
          <SwitchLanguage />
        </div>
      </div>
    </div>
  );
};

export default Header;
