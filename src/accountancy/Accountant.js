import React, { useState } from "react";
import Balance from "./Balance";
import InputArea from "./InputArea";
import EntryList from "./EntryList";
import emojipiggy from "../resources/emojipiggy.png";

const Accountant = ({ userId, setUserId }) => {
  const [balance, setBalance] = useState(0);
  const [entries, setEntries] = useState([]);

  return (
    <div>
      <h5 className="header">
        YOUR MONEY IS SAFE WITH <img src={emojipiggy} className="emojipiggy"/>
      </h5>
      <div className="container">
        <div className="flex">
          <InputArea
            balance={balance}
            setBalance={setBalance}
            entries={entries}
            setEntries={setEntries}
            setUserId={setUserId}
            userId={userId}
          ></InputArea>
          <Balance balance={balance}></Balance>
        </div>
        <EntryList
          entries={entries}
          balance={balance}
          userId={userId}
          setEntries={setEntries}
          setBalance={setBalance}
        ></EntryList>
      </div>
    </div>
  );
};

export default Accountant;
