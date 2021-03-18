import React, { useState } from "react";
import "./style.css";
import Accountant from "./components/entrylistpage/Accountant";
import Registration from "./components/registration/Registration";
import Header from "./components/Header";

const App = () => {
  const [userId, setUserId] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="global-wrapper">
      <div>
        <Header setUserId={setUserId} setLoggedIn={setLoggedIn} />
      </div>
      <div>
        {loggedIn ? (
          <Accountant
            userId={userId}
            setUserId={setUserId}
            setLoggedIn={setLoggedIn}
          />
        ) : (
          <Registration setLoggedIn={setLoggedIn} setUserId={setUserId} />
        )}
      </div>
    </div>
  );
};

export default App;
