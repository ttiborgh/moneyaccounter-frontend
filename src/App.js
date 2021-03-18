import React, { useState } from "react";
import "./style.css";
import Accountant from "./components/entrylistpage/Accountant";
import Header from "./components/Header";
import OpeningPage from "./components/OpeningPage";

const App = () => {
  const [userId, setUserId] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="global-wrapper">
      <div>
        <Header setUserId={setUserId} setLoggedIn={setLoggedIn} />
      </div>
      {loggedIn ? (
        <Accountant
          userId={userId}
          setUserId={setUserId}
          setLoggedIn={setLoggedIn}
        />
      ) : (
        <OpeningPage setLoggedIn={setLoggedIn} setUserId={setUserId} />
      )}
    </div>
  );
};

export default App;
