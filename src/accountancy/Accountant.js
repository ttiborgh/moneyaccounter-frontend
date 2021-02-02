import React, { useState } from "react";
import Balance from "./Balance";
import InputArea from "./InputArea";
import EntryList from "./EntryList";

const Accountant = () => {
  const [balance, setBalance] = useState(1000);
  const [entries, setEntries] = useState([
    {
      id: 1,
      spending: "false",
      amount: 1500,
      description: "Hab' Geld auf der Straße gefunden.",
    },
    {
      id: 2,
      spending: "true",
      amount: 500,
      description: "Socken gekauft.",
    },
  ]);

  return (
    <div>
      <h5 className="header"> REGISZTRACIO, LOGIN, ROUTING, SPRING </h5>
      <div className="container">
        <div className="flex">
          <InputArea
            balance={balance}
            setBalance={setBalance}
            entries={entries}
            setEntries={setEntries}
          ></InputArea>
          <Balance balance={balance}></Balance>
        </div>
        <EntryList
          entries={entries}
          balance={balance}
          setBalance={setBalance}
        ></EntryList>
      </div>
    </div>
  );
};

export default Accountant;
