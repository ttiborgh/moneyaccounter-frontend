import React from "react";
import LoginForm from "./LoginForm";
import { PeopleFill } from "react-bootstrap-icons";
import { Dropdown } from "react-bootstrap";

const LoginDropdown = ({ setLoggedIn, setUserId }) => {
  return (
    <>
      <Dropdown drop="down">
        <Dropdown.Toggle variant="none">
          <PeopleFill style={{ fontSize: "2rem" }} />
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ backgroundColor: "antiquewhite" }}>
          <LoginForm setLoggedIn={setLoggedIn} setUserId={setUserId} />
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default LoginDropdown;
