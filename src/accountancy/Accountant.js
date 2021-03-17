import React, { useState } from "react";
import Balance from "./Balance";
import InputArea from "./InputArea";
import EntryList from "./EntryList";
import emojipiggy from "../resources/emojipiggy.png";
import { useTranslation } from "react-i18next";

const Accountant = ({ userId, setUserId, setLoggedIn }) => {
  const [balance, setBalance] = useState(0);
  const [entries, setEntries] = useState([]);
  const { t } = useTranslation();

  return (
    <div>
      <h6 className="header">
        {t("piggybankTitle")}
        <img src={emojipiggy} className="emojipiggy" alt="piggy" />
        <button className="logoffbutton" onClick={() => setLoggedIn(false)}>
          {t("logoff")}
        </button>
      </h6>
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
