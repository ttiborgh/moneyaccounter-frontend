import React, { useState } from "react";
import Balance from "./Balance";
import InputArea from "./InputArea";
import EntryList from "./EntryList";

const Accountant = ({ userId, setUserId }) => {
  const [balance, setBalance] = useState(0);
  const [entries, setEntries] = useState([]);

  return (
    <div>
      <h5 className="header"> YOUR PIGGY BANK </h5>
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
          setBalance={setBalance}
        ></EntryList>
      </div>
    </div>
  );
};

export default Accountant;
