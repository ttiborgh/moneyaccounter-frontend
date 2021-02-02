import React, { useState } from "react";
import { v1 as uuid } from "uuid";

const InputArea = ({ balance, setBalance, entries, setEntries }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [spending, setSpending] = useState("");

  const uploadEntry = (event) => {
    setEntries([...entries, { id: uuid(), amount, description, spending }]);
    setBalance(
      spending === "true" ? balance - amount : balance + parseInt(amount)
    );
    setAmount("");
    setDescription("");
    event.preventDefault();
  };
  
  return (
    <div className="tabs">
      <h2> Neuer Eintrag </h2>
      <div className="flex">
        <form onSubmit={uploadEntry}>
          <div>
            <input
              type="text"
              placeholder="Beschreibung der Änderung"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Betrag"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <div
              className="radiobuttons"
              onChange={(e) => setSpending(e.target.value)}
            >
              <label>
                <input type="radio" value={false} name="spending" required />
                Einkommen
              </label>
              <label>
                <input type="radio" value={true} name="spending" required />
                Ausgabe
              </label>
            </div>
            <button type="submit">Einsenden</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputArea;
