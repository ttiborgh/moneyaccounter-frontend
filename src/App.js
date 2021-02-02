import React, { useState } from "react";
import "./style.css";
import Accountant from "./accountancy/Accountant";
import LoginRegistrationScreen from "./firstpage/LoginRegistrationScreen";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <Accountant />
      ) : (
        <LoginRegistrationScreen setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
};

export default App;
