import React from "react";
import { ArrowRight } from "react-bootstrap-icons";

const RegLoginButton = ({ buttonText }) => {
  return (
    <button type="submit" className="reg-btn">
      <ArrowRight className="arrow-sign-btn" />
      {buttonText}
    </button>
  );
};

export default RegLoginButton;
