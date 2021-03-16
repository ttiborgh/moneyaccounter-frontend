import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const InputArea = ({ setBalance, entries, setEntries, userId }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [spending, setSpending] = useState("");
  const { t } = useTranslation();

  const fetchFreshEntriesAndNewBalance = async () => {
    const response = await axios.get(`/api/records/${userId}`);
    const responseUser = await axios.get(`/api/user/${userId}`);
    setEntries(response.data);
    setBalance(responseUser.data.balance);
  };

  useEffect(() => {
    fetchFreshEntriesAndNewBalance();
  }, []);

  const sendNewEntry = async (newEntry) => {
    const response = await axios.post(`/api/record/${userId}`, newEntry);
  };

  const uploadEntry = (event) => {
    event.preventDefault();

    const newEntry = {
      description,
      amount,
      spending,
    };

    sendNewEntry(newEntry);

    setTimeout(() => {
      fetchFreshEntriesAndNewBalance();
    }, 500);

    console.log(entries);

    setAmount("");
    setDescription("");
  };

  return (
    <div className="tabs">
      <h2> New entry </h2>
      <div className="flex">
        <form onSubmit={uploadEntry}>
          <div>
            <input
              type="text"
              placeholder={t("transactionDescription")}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Amount"
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
                Income
              </label>
              <label>
                <input type="radio" value={true} name="spending" required />
                Spending
              </label>
            </div>
            <button className="subbutton" type="submit">
              Submit entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputArea;
