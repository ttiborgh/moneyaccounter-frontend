import React, { useState } from "react";
import "./style.css";
import Accountant from "./accountancy/Accountant";
import LoginRegistrationScreen from "./firstpage/LoginRegistrationScreen";

const App = () => {
  const [userId, setUserId] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <Accountant
          userId={userId}
          setUserId={setUserId}
          setLoggedIn={setLoggedIn}
        />
      ) : (
        <LoginRegistrationScreen
          setLoggedIn={setLoggedIn}
          setUserId={setUserId}
        />
      )}
    </div>
  );
};

export default App;
